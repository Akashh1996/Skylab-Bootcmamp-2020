/* eslint-disable spaced-comment */
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const Wargear = require('./stores/myStore');
const myRouter = require('./routes/myRouter')(Wargear);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/', 'index.html'));
});
app.use('/list', myRouter);
/*
app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/', 'detail.html'));
});
*/
/*
app.get('/shopping_cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/', 'Carrito.html'));
});
*/
app.listen(port, () => {
  debug(`Server go brrr on port ${chalk.blueBright(port)}`);
});
