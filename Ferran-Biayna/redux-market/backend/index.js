const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/productModel');
const Cart = require('./models/cartModel');
const productRouter = require('./src/routes/productRouter')(Product, Cart);
const cartRouter = require('./src/routes/cartRouter')(Cart);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/reduxMarket');

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
