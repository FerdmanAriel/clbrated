const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/database')

const app = express();
app.use(cors());

const artistsController = require('./controller/artistsController');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use('/api/artists', artistsController);

app.listen(8000);
console.log("Sever is up!");

