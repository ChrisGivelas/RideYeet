// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require("express")
const ip = require("ip")
const bodyParser = require("body-parser")

// ===========================
// LOCAL IMPORTS
// ===========================

//Functions for html scrapers
const { megabusScraper } = require("./sources/megabus/index.js")
const { kijijiScraper } = require("./sources/kijiji/index.js")

//Classes for gtfs parsers
// Call {class Name}.search(origin, destination, date) to retrieve data
const Via = require("./sources/viarail/index.js")
const ViaGTFS = new Via()
const viaSearch = ViaGTFS.search.bind(ViaGTFS)

const Go = require("./sources/go/index.js")
const GoGTFS = new Go()
const goSearch = GoGTFS.search.bind(GoGTFS)

// ===========================
// global variable declarations and middleware
// ===========================
const port = process.env.port || 8080
const app = express()
app.use(bodyParser.json())

const callScraper = async function(name, scraper, origin, destination, date) {
    var result = await scraper(origin, destination, date)
    return { name, result }
}

// Send json to this route to get your results
app.post("/trips", (req, res) => {
    let origin = req.body.origin
    let destination = req.body.destination
    let date = req.body.date
    console.log("Route was hit\n")
    console.log({ origin, destination, date })

    var resultPromises = [
        callScraper("megabus", megabusScraper, origin, destination, date),
        callScraper("kijiji", kijijiScraper, origin, destination)
        // callScraper("via", viaSearch, origin, destination),
        // callScraper("go", goSearch, origin, destination)
    ]

    Promise.all(resultPromises)
        .then(results => {
            let resultsJson = JSON.stringify(results)
            res.send(resultsJson)
        })
        .catch(err => console.log(err))
})

app.get("/", (req, res) => {
    res.send("Test Route")
})

// app listens on available port
app.listen(port, () => {
    console.log("server started at http://" + ip.address() + ":" + port)
})
