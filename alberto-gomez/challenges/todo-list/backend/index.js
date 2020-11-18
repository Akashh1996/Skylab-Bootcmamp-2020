/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const List = require('./src/models/listModel');
const listRouter = require('./src/routes/listRouter')(List);

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect('mongodb://localhost/todolistdb');

app.use(morgan('tiny'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.use('/todolist', listRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
