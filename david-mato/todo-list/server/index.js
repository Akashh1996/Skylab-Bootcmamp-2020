const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const cors = require('cors');
const TodoList = require('./src/models/todoListModel');
const routes = require('./src/routes/routes')(TodoList);

const app = express();
app.use(cors());
const port = process.env.PORT || 7000;
const dbURL = process.env.DATABASEURL || 'mongodb://localhost/todolistdb';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todolist', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
