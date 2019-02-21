// ==============================================
// One of the test files to simulate sending json
// ==============================================

const axios = require("axios");
const ip = require('ip');

let address = ip.address();

axios({
    method: "post",
    url: "http://" + address + ":8080/trips",
    data: {
        origin: "Toronto",
        destination: "Kingston",
        date: "2019-02-22"
    }
})
    .then(results => console.log(results.data[0]))

    .catch(err => console.log(err))


// [
//     {
//         "name": "megabus","result": []
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

//  Object {
    //     "name": "megabus",
    //     "result": Array [
    //       Object {
    //         "arrivalDateTime": "2019-02-28T06:20:00",
    //         "departureDateTime": "2019-02-28T03:20:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT3H",
    //         "journeyId": "13251966",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T06:20:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T03:20:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT3H",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T12:25:00",
    //         "departureDateTime": "2019-02-28T09:50:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H35M",
    //         "journeyId": "13252938",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T12:25:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T09:50:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H35M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T15:30:00",
    //         "departureDateTime": "2019-02-28T12:30:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT3H",
    //         "journeyId": "13155741",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T15:30:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T12:30:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT3H",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "NONE",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T18:30:00",
    //         "departureDateTime": "2019-02-28T15:30:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT3H",
    //         "journeyId": "13252565",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T18:30:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T15:30:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT3H",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T19:15:00",
    //         "departureDateTime": "2019-02-28T16:35:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H40M",
    //         "journeyId": "13154383",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T19:15:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T16:35:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H40M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T20:45:00",
    //         "departureDateTime": "2019-02-28T18:05:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H40M",
    //         "journeyId": "13252046",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T20:45:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T18:05:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H40M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T22:15:00",
    //         "departureDateTime": "2019-02-28T19:35:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H40M",
    //         "journeyId": "13154719",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T22:15:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T19:35:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H40M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 34.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "NONE",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-02-28T23:59:00",
    //         "departureDateTime": "2019-02-28T21:00:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H59M",
    //         "journeyId": "13252604",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-02-28T23:59:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T21:00:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H59M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 29.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //       Object {
    //         "arrivalDateTime": "2019-03-01T00:45:00",
    //         "departureDateTime": "2019-02-28T22:05:00",
    //         "destination": Object {
    //           "cityId": "145",
    //           "cityName": "Toronto, ON",
    //           "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //           "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //         },
    //         "duration": "PT2H40M",
    //         "journeyId": "13155382",
    //         "legs": Array [
    //           Object {
    //             "arrivalDateTime": "2019-03-01T00:45:00",
    //             "carrier": "megabus",
    //             "carrierIcon": "megabus.gif",
    //             "departureDateTime": "2019-02-28T22:05:00",
    //             "destination": Object {
    //               "cityId": "145",
    //               "cityName": "Toronto, ON",
    //               "stopId": "17e5bc57216a9bf9f78962d53f3f05fd",
    //               "stopName": "Toronto Coach Terminal - 610 Bay Street",
    //             },
    //             "duration": "PT2H40M",
    //             "origin": Object {
    //               "cityId": "276",
    //               "cityName": "Kingston, ON",
    //               "stopId": "817cf79ef91d959a487809dff3e08f55",
    //               "stopName": "Kingston Bus Terminal",
    //             },
    //             "transportTypeId": 1,
    //           },
    //         ],
    //         "lowStockCount": null,
    //         "origin": Object {
    //           "cityId": "276",
    //           "cityName": "Kingston, ON",
    //           "stopId": "817cf79ef91d959a487809dff3e08f55",
    //           "stopName": "Kingston Bus Terminal",
    //         },
    //         "price": 29.99,
    //         "promotionCodeStatus": "NONE",
    //         "reservableType": "SEAT",
    //         "routeName": "2720",
    //         "serviceInformation": "NONE",
    //       },
    //     ],
    //   },
    //   Object {
    //     "name": "kijiji",
    //     "result": Array [
    //       Object {
    //         "price": "$35.00",
    //         "title": "Ottawa to Toronto  Via Kingston 5PM Today",
    //       },
    //       Object {
    //         "price": "$30.00",
    //         "title": "Rideshare, Toronto to Kingston Mon 18th Feb at 7pm from Yorkdale",
    //       },
    //       Object {
    //         "price": "Please Contact",
    //         "title": "Wanted Rideshare Kingston -> Toronto -> Kitchener WEDorTH",
    //       },
    //       Object {
    //         "price": "$20.00",
    //         "title": "RIDESHARE Mon 18 6:30 Kingston to Ottawa",
    //       },
    //       Object {
    //         "price": "$35.00",
    //         "title": "Kingston to Toronto Rideshare Monday February 18 @ 9am",
    //       },
    //       Object {
    //         "price": "$30.00",
    //         "title": "Rideshare",
    //       },
    //       Object {
    //         "price": "Please Contact",
    //         "title": "Wanted:LF Rideshare Kingston to Toronto",
    //       },
    //       Object {
    //         "price": "$30.00",
    //         "title": "Guaranty Kingston To Toronto rideshare Monday 11 Feb 6 pm",
    //       },
    //       Object {
    //         "price": "$25.00",
    //         "title": "Rideshare from Kingston to Toronto",
    //       },
    //       Object {
    //         "price": "Please Contact",
    //         "title": "Wanted:LF Rideshare Sudbury to Toronto",
    //       },
    //       Object {
    //         "price": "$40.00",
    //         "title": "Rideshare from Toronto to Kingston",
    //       },
    //       Object {
    //         "price": "$25.00",
    //         "title": "Rideshare Kingston to Toronto Jan 20",
    //       },
    //       Object {
    //         "price": "$25.00",
    //         "title": "Rideshare Kingston to Toronto on Wednesday, Jan 16 at 8 am",
    //       },
    //       Object {
    //         "price": "$25.00",
    //         "title": "Rideshare for Kingston - Toronto, Mississauga (Fri - Sun)",
    //       },
    //       Object {
    //         "price": "$30.00",
    //         "title": "Kingston to Toronto rideshare Monday 07 January 5.30pm",
    //       },
    //       Object {
    //         "price": "$35.00",
    //         "title": "Need rideshare: toronto airport to kingston",
    //       },
    //       Object {
    //         "price": "Please Contact",
    //         "title": "Need: Rideshare Kingston to Toronto airport",
    //       },
    //       Object {
    //         "price": "$25.00",
    //         "title": "Kingston to Toronto/Mississauga Monday December 24th, 6.00 PM",
    //       },
    //       Object {
    //         "price": "$40.00",
    //         "title": "Kingston to Toronto RIDESHARE TODAY @ 10:30AM",
    //       },
    //       Object {
    //         "price": "$30.00",
    //         "title": "Rideshare from toronto to kingston december 22nd early morning",
    //       },
    //     ],
    //   },
    // ]