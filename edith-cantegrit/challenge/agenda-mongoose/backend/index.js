const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const { connect } = require('mongoose');
const Users = require('./src/models/usersModel');
const Adresses = require('./src/models/adressesModel');
const Countries = require('./src/models/countriesModel');
const usersRouter = require('./src/routes/usersRouter')(Users);
const adressesRouter = require('./src/routes/adressesRouter')(Adresses);
const countriesRouter = require('./src/routes/countriesRouter')(Countries);

const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

connect('mongodb://localhost/agendaDB', { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/addresses', adressesRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
