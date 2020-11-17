const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ToDo = require('./models/todoModel');
const toDoRouter = require('./src/routes/toDoRouter')(ToDo);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/TodoList');

app.use('/todo', toDoRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
