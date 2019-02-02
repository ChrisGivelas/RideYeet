

// const express = require('express');
// const ip = require('ip');
const axios = require('axios');
// const port = process.env.port || 8080;


// const app =  express();


// app.get('/megabus', (req, res) =>{
//     axios.get()
// })

// app.listen(port, ()=>{
//     console.log('Server started at ' + ip.address() + ":" + port);
// });


let destinationID = 275; //Whitby
let originID = 276; //Kingston
let departureDate = "2019-02-04"; //Feb 4th
let kingstonToWhitby = "https://ca.megabus.com/journey-planner/api/journeys?originId=" + originID +"&destinationId="+ destinationID +"&departureDate=2019-02-04&totalPassengers=1&concessionCount=0&nusCount=0&otherDisabilityCount=0&wheelchairSeated=0&pcaCount=0&days=1"
let kingstonToCornwall = "https://ca.megabus.com/journey-planner/api/journeys?originId=276&destinationId=278&departureDate=2019-02-02&totalPassengers=1&concessionCount=0&nusCount=0&otherDisabilityCount=0&wheelchairSeated=0&pcaCount=0&days=1"


axios.get(kingstonToWhitby)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))


