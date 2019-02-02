// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require('express');
const ip = require('ip');
const bodyParser = require('body-parser');

// ===========================
// LOCAL IMPORTS
// ===========================
const { megabusScraper } = require('./megabus');
const { kijijiScraper } = require('./kijiji');


// ===========================
// global variable declarations and middleware
// ===========================
const port = process.env.port || 8080;
const app = express();
app.use(bodyParser.json());

// Send json to this route to get your results
app.post('/trips', (req, res) => {
    let origin = req.body.origin;
    let destination = req.body.destination;

    let kijijiAds = kijijiScraper(origin, destination);
})


// app listens on available port
app.listen(port, () => {
    console.log('server started at http://' + ip.address() + ':' + port)
});