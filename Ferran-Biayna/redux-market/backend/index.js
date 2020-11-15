const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./src/store/productStore');
const productRouter = require('./src/routes/productRouter')(Product);
const cartRouter = require('./src/routes/cartRouter')(Product);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
