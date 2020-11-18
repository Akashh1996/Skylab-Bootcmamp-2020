const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Wargear = require('./models/WModel');
// eslint-disable-next-line spaced-comment
//const Wargear = require('./stores/myStore');
const myRouter = require('./routes/myRouter')(Wargear);

const app = express();
const port = process.env.PORT || 2000;

mongoose.connect('mongodb://localhost/wargeardb');

app.use(cors());

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', myRouter);

app.listen(port, () => {
  debug(`Server go brrr on port ${chalk.blueBright(port)}`);
});
