const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const Todo = require('./src/models/todoModel');
const todoRouter = require('./src/routes/todoRouter')(Todo);

const app = express();
const port = process.env.PORT || 5000;
const dbURL = process.env.dbURL || 'mongodb://localhost/todoListdb';

app.use(cors());

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todo', todoRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
