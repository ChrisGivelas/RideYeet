// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require('express');
const ip = require('ip');
const axios = require('axios');


// ===========================
// LOCAL IMPORTS
// ===========================
const { megabusScraper } = require('./megabus');
const { kijijiScraper } = require('./kijiji');


// ===========================
// global variable declarations
// ===========================
const port = process.env.port || 8080;
const app = express();



app.listen(port, () => {
    console.log('server started at http://' + ip.address() + ':' + port)
});