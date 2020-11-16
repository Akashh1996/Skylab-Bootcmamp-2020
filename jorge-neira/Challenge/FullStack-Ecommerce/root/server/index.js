const express = require('express');
const debug = require('debug')('asusApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Products = require('./src/models/laptopModel');
const Carts = require('./src/models/cartModel');
const productsListRouter = require('./src/routes/marketRouter')(Products);
const productsDetailRouter = require('./src/routes/marketRouter')(Products);
const shoppingCart = require('./src/routes/cartRouter')(Carts);

const asusApp = express();
const port = process.env.PORT || 5000;
asusApp.use(morgan('tiny'));

mongoose.connect('mongodb://localhost:27017/marketdb', { useNewUrlParser: true });

asusApp.use(cors());
asusApp.use(bodyParser.urlencoded({ extended: true }));
asusApp.use(bodyParser.json());
asusApp.use('/', productsListRouter);
asusApp.use('/', productsDetailRouter);
asusApp.use('/', shoppingCart);

asusApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
