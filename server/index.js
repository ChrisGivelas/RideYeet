// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require('express');
const ip = require('ip');
const axios = require('axios');
const bodyParser = ('body-parser');

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


// app.get('/trips', (req, res) => {

// })


// app listens on available port
app.listen(port, () => {
    console.log('server started at http://' + ip.address() + ':' + port)
});