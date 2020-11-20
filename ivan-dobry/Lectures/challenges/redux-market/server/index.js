/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const markets = require('./models/productModel');
const cartproducts = require('./models/shoppingModel');
const marketRoutes = require('./routes/marketRoutes')(markets, cartproducts);

const app = express();

mongoose.connect('mongodb://localhost/marketdb');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

const port = process.env.PORT || 1980;

app.use('/', marketRoutes);

module.exports = app;
