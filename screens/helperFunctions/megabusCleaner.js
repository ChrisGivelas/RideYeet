
// =============================================
//              Helper Functions
//  The helper functions defined in this file
//  help clean up the data that appears in the results page

// =============================================

// dateCleaner removes most of the info in date time and instead only returns just the time in HH:MM
dateCleaner = (datetime) => {
    return datetime.substring(datetime.length - 8, datetime.length - 3)
}

// Duration cleaner removes all other things that aren't the number of hours 
durationCleaner = (duration) => {
    return duration.substring(duration.length - 5)
}

module.exports = {
    dateCleaner,
    durationCleaner
}