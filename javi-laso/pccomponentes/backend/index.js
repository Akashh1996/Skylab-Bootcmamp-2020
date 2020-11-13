const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const morgan = require('morgan');
const ItemsStore = require('./src/store/itemsStore');
const ShoppinCartStore = require('./src/store/shoppingCartStore');
const itemListRouter = require('./src/routes/itemListRouter')(ItemsStore);
const shoppinCartRouter = require('./src/routes/shoppingCartRouter')(ShoppinCartStore);

const server = express();
server.use(morgan('tiny'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const port = process.env.PORT || 2130;

server.use('/', itemListRouter);

server.use('/shoppingcart', shoppinCartRouter);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${chalk.blueBright(port)}...`);
});
