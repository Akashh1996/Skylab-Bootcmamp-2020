/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const items = require('./models/listModel');
const listRoutes = require('./routes/listRoutes')(items);

const app = express();
const port = process.env.PORT || 1978;

const dataBase = process.env.LISTDB || 'mongodb://localhost/listdb';
connect(dataBase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

connect(dataBase);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', listRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
