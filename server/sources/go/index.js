const csvtojson = require("csvtojson")
const fs = require("fs")
const db = require("../../server_assets/ghettoDB.js")

const GTFS_RELATIVE_PATH = "sources/go/gtfs"
const filesToIgnore = ["shapes.txt", "stop_times", "trips.txt"]

class Go_GtfsParserService {
    constructor() {
        this.files = fs
            .readdirSync(GTFS_RELATIVE_PATH)
            .filter(file => !filesToIgnore.includes(file))
            .map(file => `${GTFS_RELATIVE_PATH}/${file}`)

        this.gtfsPromises = this.files.map(async file => {
            return await csvtojson()
                .fromFile(file)
                .then(json => {
                    return { file, json }
                })
        })
    }

    async search(origin, destination) {
        return await Promise.all(this.gtfsPromises)
            .then(jsons => {
                return jsons.reduce((acc, curr) => {
                    return { ...acc, [curr.file]: curr.json }
                }, {})
            })
            .then(jsons => {
                var originInfo = db.query(origin)
                var destinationInfo = db.query(destination)

                var originId = originInfo.go
                var destinationId = destinationInfo.go

                var results = jsons[`${GTFS_RELATIVE_PATH}/routes.txt`].filter(
                    routes => routes.route_id === `${originId}-${destinationId}`
                )

                return results
            })
    }
}

module.exports = Go_GtfsParserService
