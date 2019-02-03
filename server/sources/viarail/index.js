const csvtojson = require("csvtojson")
const fs = require("fs")
const db = require("../../ghettoDB.js")

const GTFS_RELATIVE_PATH = "gtfs"
const filesToIgnore = []

class Via_GtfsParserService {
    constructor() {
        this.files = fs
            .readdirSync(GTFS_RELATIVE_PATH)
            .filter(file => !filesToIgnore.includes(file))
            .map(file => `${GTFS_RELATIVE_PATH}/${file}`)

        this.gtfsPromises = this.files.map(async file => {
            return await csvtojson()
                .fromFile(file)
                .then(json => {
                    console.log(`Done ${file}`)
                    return { file, json }
                })
        })

        this.aggregatedPromise = Promise.all(gtfsJsons)
    }

    async search(origin, destination) {
        return await this.aggregatedPromise
            .then(jsons => {
                return jsons.reduce((acc, curr) => {
                    return { ...acc, [curr.file]: curr.json }
                }, {})
            })
            .then(jsons => {
                var originInfo = db.query(origin)
                var destinationInfo = db.query(destination)

                var originId = originInfo.via
                var destinationId = destinationInfo.via

                var results = jsons["gtfs/routes.txt"].filter(
                    routes => routes.route_id === `${originId}-${destinationId}`
                )

                return results
            })
    }
}

module.exports = Via_GtfsParserService
