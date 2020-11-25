const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Cart = require('./models/cartModel');
const Products = require('./models/productModel');
const productRouter = require('./src/routes/productRouter')(Products, Cart);
const cartRouter = require('./src/routes/cartRouter')(Cart);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim() || 'mongodb://localhost/reduxMarket';

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
