const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Products = require('./src/models/productModel');
const Basket = require('./src/models/basketModel');
const productRouter = require('./src/routes/productsRouter')(Products);
const basketRouter = require('./src/routes/basketRouter')(Basket, Products);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/productsdb');
app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('It works');
});

app.use('/list', productRouter);
app.use('/basket', basketRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
