const axios = require('axios');
const { locations, query } = require('./ghettoDB');



const megabusScraper = (origin, destination, date) => {
    let destinationID = query(locations, destination).megabus;
    let originID = query(locations, origin).megabus;
    let tripDate = "2019-02-04";

    let megabusUrl = "https://ca.megabus.com/journey-planner/api/journeys?originId=" + originID + "&destinationId=" + destinationID + "&departureDate=" + tripDate + "&totalPassengers=1&concessionCount=0&nusCount=0&otherDisabilityCount=0&wheelchairSeated=0&pcaCount=0&days=1";

    axios.get(megabusUrl)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err))
};





module.exports = {
    megabusScraper
}




// ============================
// Format to scrape megabus
// ============================
// // Tentative megabus code (at least the format of it)
// let destinationID = 275; //Whitby
// let originID = 276; //Kingston
// let departureDate = "2019-02-04"; //Feb 4th
// let kingstonToWhitby = "https://ca.megabus.com/journey-planner/api/journeys?originId=" + originID + "&destinationId=" + destinationID + "&departureDate=2019-02-04&totalPassengers=1&concessionCount=0&nusCount=0&otherDisabilityCount=0&wheelchairSeated=0&pcaCount=0&days=1"
// let kingstonToCornwall = "https://ca.megabus.com/journey-planner/api/journeys?originId=276&destinationId=278&departureDate=2019-02-02&totalPassengers=1&concessionCount=0&nusCount=0&otherDisabilityCount=0&wheelchairSeated=0&pcaCount=0&days=1"
