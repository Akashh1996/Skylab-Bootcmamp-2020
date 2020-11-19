const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const User = require('./models/usersModel');
const Address = require('./models/addressesModel');
const Country = require('./models/countriesModel');
const populateUsersRouter = require('./routes/usersRouter')(User);
const populateAddressesRouter = require('./routes/adressesRouter')(Address);
const populateCountriesRouter = require('./routes/countriesRouter')(Country);

const app = express();
const port = process.env.PORT || 5000;
const dbURL = process.env.dbURL || 'mongodb://localhost/populationchallenge';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/boostrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/boostrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/views', 'index.html'));
});

app.use('/users', populateUsersRouter);
app.use('/addresses', populateAddressesRouter);
app.use('/countries', populateCountriesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});