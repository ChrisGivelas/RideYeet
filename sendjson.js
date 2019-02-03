// ==============================================
// One of the test files to simulate sending json
// ==============================================

const axios = require("axios")

axios({
    method: "post",
    url: "http://192.168.56.1:8080/trips",
    data: {
        origin: "Toronto",
        destination: "Kingston",
        date: ""
    }
})
