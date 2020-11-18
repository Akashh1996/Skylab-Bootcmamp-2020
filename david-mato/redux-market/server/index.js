const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./src/models/productModel');
const routes = require('./src/routes/routes')(Product);

const app = express();
const port = process.env.PORT || 2000;

mongoose.connect('mongodb://localhost/productsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
