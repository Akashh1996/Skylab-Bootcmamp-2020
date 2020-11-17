const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./src/models/todoModel');
const heroRouter = require('./src/routes/todoRouter')(Todo);

const app = express();
const port = process.env.PORT || 7777;

mongoose.connect('mongodb://localhost/heroesdb');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/heroes', heroRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
