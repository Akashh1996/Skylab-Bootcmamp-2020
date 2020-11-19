const express = require('express');
const debug = require('debug')('populationApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');

const populationApp = express();
const port = process.env.PORT || 5000;
const dbURL = process.env.DBURL || 'mongodb://localhost/populationDB';
populationApp.use(morgan('tiny'));

populationApp.use(cors());
populationApp.use(morgan('tiny'));
populationApp.use(bodyParser.urlencoded({ extended: true }));
populationApp.use(bodyParser.json());
connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

populationApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
