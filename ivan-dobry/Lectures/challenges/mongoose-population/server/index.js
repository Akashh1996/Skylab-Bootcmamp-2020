/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./models/usersModel');
const adressess = require('./models/adressModel');
const contries = require('./models/countriesModel');
const usersRoutes = require('./routes/usersRoutes')(users);
const adressRoutes = require('./routes/adressRoutes')(adressess);
const countryRoutes = require('./routes/countriesRoutes')(contries);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/populatedb');

const port = process.env.PORT || 1970;
app.use('/', usersRoutes);
app.use('/adress', adressRoutes);
app.use('/country', countryRoutes);

app.listen(port, () => {
  console.log(`Server up in ${port}`);
});
