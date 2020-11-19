const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const User = require('./src/models/userModel');
const Address = require('./src/models/addressModel');
const Country = require('./src/models/countryModel');
const userRouter = require('./src/routers/userRouter')(User);
const addressRouter = require('./src/routers/addressRouter')(Address);
const countryRouter = require('./src/routers/countryRouter')(Country);

const app = express();
const port = process.env.PORT || 5001;
const dbUrl = process.env.DATABASE || 'mongodb://localhost/populationDB';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.use('/users', userRouter);
app.use('/addresses', addressRouter);
app.use('/countries', countryRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
