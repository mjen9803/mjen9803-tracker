const express = require('express');

// init express

const app = express();

// serve public folder
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => )