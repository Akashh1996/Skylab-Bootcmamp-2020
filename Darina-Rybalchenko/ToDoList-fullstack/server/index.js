const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const TodoList = require('./src/model/todoListModel');
const todoListRouter = require('./src/routes/todoListRouter')(TodoList);

const app = express();

const port = process.env.PORT || 1240;

const dbURL = process.env.DBURL || 'mongodb://localhost/todolistdb';

connect(dbURL);

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('To Do List works');
});

app.use('/list', todoListRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
