const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./src/models/productModel');
const Cart = require('./src/models/cartModel');
const routes = require('./src/routes/routes')(Product, Cart);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/productsdb');

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/', routes);

app.listen(port, () => {
  debug(`Server is runnning on port ${port}`);
});
