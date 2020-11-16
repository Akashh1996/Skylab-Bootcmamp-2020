/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

const port = process.env.PORT || 1980;

const marketRoutes = require('./routes/marketRoutes')();

app.use('/', marketRoutes);

app.listen(port, () => {
  console.log(`Server up in port ${port}`);
});
