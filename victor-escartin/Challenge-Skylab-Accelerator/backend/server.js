const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 6000;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is Ready')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});