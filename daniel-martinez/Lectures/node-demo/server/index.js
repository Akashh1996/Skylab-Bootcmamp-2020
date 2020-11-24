const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const heroes = require('./public/heroes.json');
const Hero = require('./src/models/superHeroModel');
const heroRouter = require('./src/routes/heroRouter')(Hero);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/superHeroDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

const topHeroes = heroes.slice(0, 4);
app.get('/', (req, res) => {
  res.render('dashboard', { topHeroes });
});

app.get('/heroes', (req, res) => {
  res.render('heroes', { heroes });
});

app.get('/heroes/:heroId', (req, res) => {
  res.render('detail', { heroes });
});

app.use('/api/heroes', heroRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
