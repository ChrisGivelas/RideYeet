const locations = [
    {
        name: "Toronto",
        megabus: 145,
        kijiji: 1700272,
        via: 119,
        go: null,
        kijijiName: "gta-greater-toronto-area"
    },
    {
        name: "Montreal",
        megabus: 280,
        kijiji: 80002,
        via: null,
        go: null,
        kijijiName: "grand-montreal"
    },
    {
        name: "Kingston",
        megabus: 276,
        kijiji: 1700181,
        via: null,
        go: null,
        kijijiName: "kingston-area"
    },
    {
        name: "Waterloo",
        megabus: 422,
        kijiji: 1700212,
        via: null,
        go: null,
        kijijiName: "kitchener-waterloo"
    },
    {
        name: "Whitby",
        megabus: 275,
        kijiji: 1700275,
        via: null,
        go: null,
        kijijiName: "oshawa-durham-region"
    }
];

const query = (locationArray, locationName) => {
    let targetLocation = locationArray.filter(location => {
        return location.name == locationName;
    });
    return targetLocation[0];
};



module.exports = {
    locations,
    query
}