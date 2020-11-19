const express = require('express');
const debug = require('debug')('populationApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');

const User = require('./src/models/usersModel');
const Address = require('./src/models/addressModel');
const Country = require('./src/models/countriesModel');

const usersRouter = require('./src/routes/usersRouter')(User, Address, Country);
const userRouter = require('./src/routes/userRouter')(User);
const addressRouter = require('./src/routes/addressRouter')(Address);
const countryRouter = require('./src/routes/countryRouter')(Country);

const populationApp = express();
const port = process.env.PORT || 5000;
const dbURL = process.env.DBURL || 'mongodb://localhost/populationDB';
connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

populationApp.use(cors());
populationApp.use(morgan('tiny'));
populationApp.use(bodyParser.urlencoded({ extended: true }));
populationApp.use(bodyParser.json());

populationApp.use('/', usersRouter);
populationApp.use('/user', userRouter);
populationApp.use('/address', addressRouter);
populationApp.use('/country', countryRouter);

populationApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
