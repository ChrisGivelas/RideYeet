const csvtojson = require("csvtojson")
const fs = require("fs")
const db = require("../../server_assets/ghettoDB.js")

const GTFS_RELATIVE_PATH = "sources/viarail/gtfs"
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

                var originId = originInfo.via
                var destinationId = destinationInfo.via

                var routes = jsons[`${GTFS_RELATIVE_PATH}/routes.txt`].filter(
                    route => route.route_id === `${originId}-${destinationId}`
                )

                const mockedRouteData = routes.map(route => {
                    let temp = {}
                    temp.price = Math.floor(Math.random() * 50 + 40)
                    temp.depart = Math.floor(Math.random() * 24)
                    temp.arrive = (temp.depart + 3) % 24
                    temp.origin = origin
                    temp.destination = destination
                    temp.description = route.route_long_name

                    return temp
                })

                return mockedRouteData
            })
    }
}

module.exports = Via_GtfsParserService
