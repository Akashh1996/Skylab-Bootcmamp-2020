const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});
app.get('/lunarillos', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'lunarillos/index.html'));
});
app.get('/rakuten', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'rakuten/main-index.html'));
});

// app.get('/hero', (req, res) => {
//     res.sendFile(path.join(__dirname, 'heroes.json'))
// })

app.listen(port, () => {
  debug(`Server is running on port ${chalk.red(port)}`);
});
