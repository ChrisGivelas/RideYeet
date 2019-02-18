// ==============================================
// One of the test files to simulate sending json
// ==============================================

const axios = require("axios")

axios({
    method: "post",
    url: "http://192.168.2.104:8080/trips",
    data: {
        origin: "Toronto",
        destination: "Kingston",
        date: ""
    }
})


// [
//     {
//         "name": "megabus", "result": []
//     },
//     {
//         "name": "kijiji",
//         "result": [{ "price": "$35.00", "title": "Rideshare Brampton Mississauga Toronto to Ottawa Everyday" }, { "price": "$25.00", "title": "Missisauga Toronto to Ottawa 5pm ride daily going" }, { "price": "$35.00", "title": "RideShare From Toronto To Ottawa Everyday Service......" }, { "price": "$40.00", "title": "613 703-3345 Daily Toronto - Ottawa: 5pm" }, { "price": "$35.00", "title": "Rideshare from Toronto to Ottawa (4168771235)" }, { "price": "$35.00", "title": "Rideshare service Toronto -ottawa 10am &5pm 4165874589" }, { "price": "$35.00", "title": "*Rideshare to Ottawa from Toronto VIA KINGSTON everyday*" }, { "price": "$35.00", "title": "Rideshare service available Toronto-Ottawa 10am&5pm 416-587-4589" }, { "price": "$35.00", "title": "Rideshare today Toronto-Ottawa 5pm 6133164597" }, { "price": "$40.00", "title": "Rideshare TODAY Toronto area to Kingston or Montréal" }, { "price": "$20.00", "title": "RIDESHARE Mon 18 4pm Toronto Trenton Kingston Ottawa" }, { "price": "$25.00", "title": "Rideshare - Toronto to Ottawa 35$ Sunday 8am" }, { "price": "Please Contact", "title": "Wanted:Wanted a Rideshare from brampton to kingston on 16 feb morning" }, { "price": "Free", "title": "Megabus rideshare toronto to kingston on feb 14 at 11 am" }, { "price": "$25.00", "title": "KINGSTON TO TORONTO RIDESHARE TODAY AT 6:30 PM" }, { "price": "$25.00", "title": "TORONTO TO KINGSTON RIDESHARE TODAY AT 3:30 PM" }, { "price": "$30.00", "title": "Toronto Mississauaga to Ottawa Rideshare Everyday 5pm ride" }, { "price": "$30.00", "title": "Rideshare:Toronto-Kingston-Ottawa;Sun Feb 3 at 5pm." }, { "price": "Please Contact", "title": "Cheap cab/taxi/rides/rideshare/delivery" }, { "price": "$35.00", "title": "(5pm)Toronto- Mississauga- Brampton-Ottawa-(613) 902-2997) Wifi)" }]
//     },
//     {
//         "name": "via",
//         "result": [{ "price": 87, "depart": 14, "arrive": 17, "origin": "Toronto", "destination": "Kingston", "description": "Toronto - Kingston" }]
//     },
//     {
//         "name": "go",
//         "result": []
//     }
// ]