const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const Product = require('./src/models/productModel');
const BasketProduct = require('./src/models/basketModel');
const productsRouter = require('./src/routes/productsRouter')(Product, BasketProduct);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/marketdb');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productsRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
