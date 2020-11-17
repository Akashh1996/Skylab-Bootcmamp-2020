const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');
// const ItemsStore = require('./src/stores/itemsStore');
const mongoose = require('mongoose');
const itemSchema = require('./src/models/itemSchema');
// const ShoppingCartStore = require('./src/stores/shoppingCartStore');
const itemListRouter = require('./src/routes/itemListRouter')(itemSchema);
const cartItemSchema = require('./src/models/cartItemSchema');
const shoppingCartRouter = require('./src/routes/shoppingCartRouter')(cartItemSchema);

const server = express();
const port = process.env.PORT || 2130;

mongoose.connect('mongodb://localhost/pccodb');

server.use(morgan('dev'));

server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/shoppingcart', shoppingCartRouter);
server.use('/', itemListRouter);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${chalk.blueBright(port)}...`);
});
