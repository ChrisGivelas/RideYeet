// ==============================================
// One of the test files to simulate sending json
// ==============================================

const axios = require('axios');


// axios.post("http://10.217.215.190:8080/trips", testobj)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => console.log(err))

// Working format for axios
axios({
    method: 'post',
    url: 'http://10.217.215.190:8080/trips',
    data: {
        origin: 'Kingston',
        destination: 'Toronto',
        date: ""
    }
});

