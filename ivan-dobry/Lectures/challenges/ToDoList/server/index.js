/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./models/listModel');
const listRoutes = require('./routes/listRoutes')(items);

const app = express();
const port = process.env.PORT || 1978;

mongoose.connect('mongodb://localhost/listdb');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', listRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
