const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const itemSchema = require('./src/models/itemSchema');
const itemListRouter = require('./src/routes/itemListRouter')(itemSchema);
const cartSchema = require('./src/models/cartSchema');
const shoppingCartRouter = require('./src/routes/shoppingCartRouter')(cartSchema);

const server = express();
const port = process.env.PORT || 2130;
const dbUrl = process.env.DBURL || 'mongodb://localhost/pccodb';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

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
