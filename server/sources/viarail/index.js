const csvtojson = require("csvtojson")
const fs = require("fs")
const db = require("../../ghettoDB.js")

const GTFS_RELATIVE_PATH = "gtfs"
const filesToIgnore = []

class ViaScraperService {
    constructor() {
        this.files = fs
            .readdirSync(GTFS_RELATIVE_PATH)
            .filter(file => !filesToIgnore.includes(file))
            .map(file => `${GTFS_RELATIVE_PATH}/${file}`)

        var gtfsJsons = this.files.map(async file => {
            return await csvtojson()
                .fromFile(file)
                .then(json => {
                    console.log(`Done ${file}`)
                    return { file, json }
                })
        })

        Promise.all(gtfsJsons).then(jsons => {
            self.jsons = jsons.reduce((acc, curr) => {
                return { ...acc, [curr.file]: curr.json }
            }, {})
            self.doneFetching = true
        })
    }

    search(origin, destination, date) {
        var self = this

        if (!self.doneFetching) {
            console.log("Not done parsing GTSF")
            return -1
        } else {
            var originInfo = db.query(origin)
            var destinationInfo = db.query(destination)

            var originId = originInfo.via
            var destinationId = destinationInfo.via

            var results = self.jsons["gtfs/routes.txt"].filter(
                routes => routes.route_id === `${originId}-${destinationId}`
            )

            return results
        }
    }
}

module.exports = ViaScraperService
