const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const { connect } = require('mongoose');
const User = require('./src/models/userModel');
const Country = require('./src/models/countriesModel');
const Address = require('./src/models/addressModel');
const userRouter = require('./src/routes/userRouter')(User, Address, Country);
const addressRouter = require('./src/routes/addressRouter')(Address);
const countryRouter = require('./src/routes/countryRouter')(Country);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

connect('mongodb://localhost/peopleDB', { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/addresses', addressRouter);
app.use('/countries', countryRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
