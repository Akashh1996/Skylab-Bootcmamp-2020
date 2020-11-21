const express = require('express');

const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const User = require('./src/models/userModel');
const userRouter = require('./src/routers/userRouter')(User);
const Address = require('./src/models/addressModel');
const adressRouter = require('./src/routers/addressRouter')(Address);
const Country = require('./src/models/countryModel');
const countryRouter = require('./src/routers/countryRouter')(Country);

const app = express();
app.use(cors());
const port = process.env.PORT || 5050;

const DBURL = 'mongodb://localhost/tododb';
connect(DBURL);

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/address', adressRouter);
app.use('/country', countryRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
