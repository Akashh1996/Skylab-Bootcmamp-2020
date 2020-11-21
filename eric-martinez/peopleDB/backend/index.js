const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const { connect } = require('mongoose');
const User = require('./src/models/userModel');
const Country = require('./src/models/countriesModel');
const Adress = require('./src/models/adressesModel');
const userRouter = require('./src/routes/peopleRouter')(User, Country, Adress);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

connect('mongodb://localhost/superHeroDB', { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', userRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
