// ===========================
// NPM  INSTALLED PACKAGES
// ===========================
const express = require('express');
const ip = require('ip');
const axios = require('axios');


// ===========================
// LOCAL IMPORTS
// ===========================
const megabus = require('./megabus');


const port = process.env.port || 8080;


// Tentative kijiji code
let searchTerms = "acoustic-guitar";
let kijijiUrl = 'https://www.kijiji.ca/b-oakville-halton-region/' + searchTerms + '/k0l' + id + '?dc=true'

axios.get('/getRoutes', (req, res) > {

})

// axios.get(kingstonToWhitby)
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err))


