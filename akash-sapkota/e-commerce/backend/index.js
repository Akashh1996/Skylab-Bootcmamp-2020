const express = require('express');
const cors = require('cors');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const Product = require('./src/models/productModel');
/* const Product = require('./src/stores/productStore'); */
const Cart = require("./src/models/cartModel")
const productRouter = require('./src/routes/productRouter')(Product, Cart);

const app = express();
app.use(cors());
const port = process.env.PORT || 1400;

mongoose.connect("mongodb://localhost/marketdb")

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/products', productRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
