const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const { connect } = require('mongoose');
const Persons = require('./src/models/agendaModel');
const agendaRouter = require('./src/routes/agendaRouter')(Persons);

const app = express();

app.use(cors());
const port = process.env.PORT || 5000;
const URLdb = process.env.DB || 'mongodb://localhost/agenda';

connect(URLdb, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/agenda', agendaRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
