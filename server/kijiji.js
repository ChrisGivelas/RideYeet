const axios = require('axios');
const cheerio = require('cheerio');
const { query, demo_locations } = require('./ghettoDB');



// Helper function to clean up the parsed text from cheerio
const textCleanUp = (text) => {
    let newText = text.substring(2);
    newText = newText.trim();
    return newText;
}

// Function Parameters: 
//      - OriginName: where to search for ride shares
//      - destinationName: used in the search tag to determine a possible rideshare 
const kijijiScraper = (originName, destinationName) => {
    let area = query(originName, demo_locations).kijijiName;
    let originID = query(originName, demo_locations).kijiji;

    let kijijiUrl = "https://www.kijiji.ca/b-" + area + "/rideshare-" + destinationName + "/k0l" + originID + "?dc=true"

    return new Promise((resolve, reject) => {
        axios.get(kijijiUrl)
            .then(response => {
                let listAds = [];
                let $ = cheerio.load(response.data);
                $('.regular-ad').each(function (index, element) {
                    let saleItem = {};
                    saleItem.price = textCleanUp($(this).find('.price').text());
                    saleItem.title = textCleanUp($(this).find('a').text());
                    listAds.push(saleItem);
                    resolve(listAds);
                });
            })
            .catch(err => reject(err))

    })
}

module.exports = {
    kijijiScraper
}

