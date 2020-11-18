const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const { debug } = require('console');
const Todo = require('./src/models/todoModel');
const todoRouter = require('./src/routes/todoRouter')(Todo);

const app = express();
const port = process.env.PORT || 3333;

const DataBaseURL = process.env.URL || 'mongodb://localhost/todo';
connect(DataBaseURL);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', todoRouter);

app.listen(port, () => {
  debug(`Server working in port ${port}`);
});
