const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoList = require('./src/models/todoListModel');
const routes = require('./src/routes/routes')(TodoList);

const app = express();
app.use(cors());
const port = process.env.PORT || 7000;

mongoose.connect('mongodb://localhost/todolistdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todolist', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
