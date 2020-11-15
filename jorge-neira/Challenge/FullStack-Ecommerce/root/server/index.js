const express = require('express');
const debug = require('debug')('asusApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const Products = require('./src/stores/marketStore');
const productsListRouter = require('./src/routes/marketRouter')(Products);
const productsDetailRouter = require('./src/routes/marketRouter')(Products);

const asusApp = express();
const port = process.env.PORT || 5000;

asusApp.use(cors());
asusApp.use(morgan('tiny'));
asusApp.use(bodyParser.urlencoded({ extended: true }));
asusApp.use(bodyParser.json());
asusApp.use('/', productsListRouter);
asusApp.use('/', productsDetailRouter);

asusApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
