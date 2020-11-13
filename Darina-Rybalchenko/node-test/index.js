const express = require('express');
const path = require('path');
const debug = require('debug')('app*');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 5000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/rakuten', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'rakuten-home.html'));
});

app.get('/bethany', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'bethany.html'));
});

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
