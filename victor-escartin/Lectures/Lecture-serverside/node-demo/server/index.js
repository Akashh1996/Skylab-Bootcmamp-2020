const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Hero = require('./src/models/superHeroModel');
const heroRouter = require('./src/routes/heroRouter')(Hero);

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

app.get('/', (req, res) => {
  res.render('index', { heroes });
});

app.get('/detail/:id', (req, res) => {
  const detailId = +req.params.id;
  const heroDetail = heroes.find((element) => element.id === detailId);
  res.render('detail', { heroDetail });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.use('/heroes', heroRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
