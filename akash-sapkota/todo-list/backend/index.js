const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./src/models/todoModel');
const market = require('./src/routes/todoRouter');

const todoRouter = market(Todo);
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/tododb');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todo', todoRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
