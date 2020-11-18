const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ToDo = require('./models/todoModel');
const toDoRouter = require('./src/routes/toDoRouter')(ToDo);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim() || 'mongodb://localhost/TodoList';

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/todo', toDoRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
