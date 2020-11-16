/* eslint-disable linebreak-style */
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const debug = require('debug')('app');

const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./src/models/productModel');
const Basket = require('./src/models/basketModel');
const testRoute = require('./src/routes/productRoutes')(Product, Basket);

const app = express();
app.use(cors());
const port = process.env.PORT || 3020;

mongoose.connect('mongodb://localhost:27017/marketdb');
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/', testRoute);
app.use('/products', testRoute);

app.listen(port, () => debug(`Example app listening on port ${port}!`));
