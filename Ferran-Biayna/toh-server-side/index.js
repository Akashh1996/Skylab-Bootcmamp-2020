const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');
const Hero = require('./src/models/superHeroModel.js');
const heroRouter = require('./src/routes/heroRouter')(Hero);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim() || 'mongodb://localhost/SuperHeroesData';

app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(`${__dirname}/public`));
app.use('/heroes', heroRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
