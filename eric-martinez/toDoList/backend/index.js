const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const Items = require('./src/models/toDoListModel');
const toDoListRouter = require('./src/routes/toDoListRouter')(Items);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/toDoListdb', { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todolist', toDoListRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
