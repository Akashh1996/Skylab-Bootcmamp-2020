const express = require('express');
const debug = require('debug')('asusApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');
const Laptops = require('./src/models/laptopModel');
const Carts = require('./src/models/cartModel');
const Specs = require('./src/models/laptopSpecsModel');
const laptopsListRouter = require('./src/routes/laptopsRouter')(Laptops);
const laptopDetailRouter = require('./src/routes/laptopRouter')(Laptops, Specs);
const shoppingCart = require('./src/routes/cartRouter')(Carts);

const ecommerceApp = express();
const port = process.env.PORT || 5000;
const dbURL = process.env.DBURL || 'mongodb://localhost/marketdb';
ecommerceApp.use(morgan('tiny'));

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

ecommerceApp.use(cors());
ecommerceApp.use(bodyParser.urlencoded({ extended: true }));
ecommerceApp.use(bodyParser.json());
ecommerceApp.use('/', laptopsListRouter);
ecommerceApp.use('/', laptopDetailRouter);
ecommerceApp.use('/', shoppingCart);

ecommerceApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
