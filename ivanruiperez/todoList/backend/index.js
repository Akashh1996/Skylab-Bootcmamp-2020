/* eslint-disable no-console */
/* eslint-disable indent */
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./models/todoModel');
const todoRouter = require('./routes/todoRouter')(Todo);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/todos');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', todoRouter);

app.listen(port, () => {
 console.log(`Server is running on port ${chalk.green(port)}`);
});
