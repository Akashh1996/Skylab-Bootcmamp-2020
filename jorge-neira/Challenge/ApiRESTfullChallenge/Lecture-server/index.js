const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 9191;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/conecta4', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/conecta-4', 'index.html'));
});

app.get('/rakuten', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/challenge-rakuten-team', 'index.html'));
});

app.get('/rakuten/ ', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/challenge-rakuten-team', 'detail.html'));
});

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
