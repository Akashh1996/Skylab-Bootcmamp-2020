const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./src/models/productsModel');
const productRouter = require('./src/routes/productRouter')(Product);
const Cart = require('./src/models/cartModel');
const cartRouter = require('./src/routes/cartRouter')(Cart);
const Contact = require('./src/models/contactModel');
const contactRouter = require('./src/routes/contactRouter')(Contact);

const Checkout = require('./src/models/checkoutModel');
const checkoutRouter = require('./src/routes/checkoutRouter')(Checkout);

const app = express();
app.use(cors());
const port = process.env.PORT || 6326;

const DBURL = 'mongodb://localhost/mariatchadb';
mongoose.connect(DBURL, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/contact', contactRouter);
app.use('/checkout', checkoutRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
