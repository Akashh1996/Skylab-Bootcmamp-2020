const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {connect} = require('mongoose');
const Movie = require('./src/models/movieModel');
const movieRouter = require('./src/routes/movieRouter')(Movie);

const app = express();
const port = process.env.PORT || 5000;
const dataBase = process.env.MOVIESDB || 'mongodb://localhost/moviesdb'

connect(dataBase,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.use('/movies', movieRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
