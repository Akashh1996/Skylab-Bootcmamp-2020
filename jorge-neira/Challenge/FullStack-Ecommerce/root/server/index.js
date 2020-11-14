const express = require('express');
const debug = require('debug')('asusApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const asusRouter = require('./src/routes/asusRouter.js')();

const asusApp = express();
const port = process.env.PORT || 5000;

asusApp.use(morgan('tiny'));
asusApp.use(bodyParser.urlencoded({ extended: true }));
asusApp.use(bodyParser.json());

asusApp.use('/list', asusRouter);

asusApp.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
