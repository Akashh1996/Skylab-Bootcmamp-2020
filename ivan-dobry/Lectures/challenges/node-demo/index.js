const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const heroRouter = require('./src/routes/heroRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  debug('Loading morgan now');
  next();
});

app.use(morgan('tiny'));

app.use(bodyParser.json());
// app.use(express.json());

app.use((req, res, next) => {
  setTimeout(() => {
    debug('waiting...');
    next();
  }, 2000);
});

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.get('/lunarillos', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'indexLunarillos.html'));
});

app.get('/heroes', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'dashboard.html'));
});

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

app.use('/heroes', heroRouter(heroes));

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
