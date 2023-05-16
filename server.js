const express = require('express');

// init express

const app = express();

// serve public folder
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname, + "/dist.index.html");
});

let port = 8888;
let server = app.listen(port, () => {
    console.log('App server is running on port ${port}')
})