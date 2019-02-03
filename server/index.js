// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require("express")
const ip = require("ip")
const bodyParser = require("body-parser")

// ===========================
// LOCAL IMPORTS
// ===========================

//functions
const { megabusScraper } = require("./megabus")
const { kijijiScraper } = require("./kijiji")

//classes
// Call {class Name}.search(origin, destination, date) to retrieve data
const ViaScraperService = require("./sources/viarail/index.js")
const GoScraperService = require("./sources/go/index.js")

// ===========================
// global variable declarations and middleware
// ===========================
const port = process.env.port || 8080
const app = express()
app.use(bodyParser.json())

const callScraper = async function (name, scraper, origin, destination, date) {
    var result = await scraper(origin, destination, date)
    return { name, result }
}

// Send json to this route to get your results
app.post("/trips", (req, res) => {
    let origin = req.body.origin
    let destination = req.body.destination;
    let date = req.body.date;

    var resultPromises = [
        callScraper("megabus", megabusScraper, origin, destination, date),
        callScraper("kijiji", kijijiScraper, origin, destination)
        // callScraper("via", viaScraper, origin, destination),
        // callScraper("go", goScraper, origin, destination)
    ]


    Promise.all(resultPromises).then(results => {
        console.log(results)
        res.send(results)
    })
})

// app listens on available port
app.listen(port, () => {
    console.log("server started at http://" + ip.address() + ":" + port)
})
