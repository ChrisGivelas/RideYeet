// using small examples to learn cheerio
const axios = require('axios');
const cheerio = require('cheerio');


const textCleanUp = (text) => {
    let newText = text.substring(2);
    newText = newText.trim();
    return newText;
}

axios.get('https://www.kijiji.ca/b-barrie/acoustic-guitar/k0l1700006?dc=true')
    .then(response => {
        let listAds = [];
        let $ = cheerio.load(response.data);
        $('.regular-ad').each(function (index, element) {
            let saleItem = {};
            saleItem.price = textCleanUp($(this).find('.price').text());
            saleItem.title = textCleanUp($(this).find('a').text());
            listAds.push(saleItem);

        });
        console.log(listAds);
    })
    .catch(err => console.log(error))




// let $ = cheerio.load(someHtml);
// // $('.firstDiv').each(function (index, element) {
// //     listLi.push($(this).text());
// // });
// let moreText = [];
// $('.firstDiv').find('.thirdDiv').children().each(function (index, element) {
//     moreText.push($(this).text())
// });

// console.log(moreText);


