const { join } = require('path');
const express = require('express');
//const { getData } = require("./utils");
//const { data } = require("./data.js");
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

let rawdata = fs.readFileSync('countries.json');
let countryList = JSON.parse(rawdata);

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.get('/country', (req, res) => {
    const { value } = req.query;
    console.log(value);
    const result = countryList.filter(
        item => item.name.toLowerCase().indexOf(value) > -1 && value.length > 0
    );
    res.send(result);
});

app.listen(3001, () => console.log('port 3001'));
