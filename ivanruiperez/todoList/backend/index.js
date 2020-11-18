const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const Todo = require('./models/todoModel');
const todoRouter = require('./routes/todoRouter')(Todo);

const app = express();
const port = process.env.PORT || 5000;
const DBURL = process.env.DBURL || 'mongodb://localhost/todos';

connect(DBURL);

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${chalk.green(port)}`);
});
