const express = require('express');
const cors = require('cors');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Hero = require('./src/models/heroModel');
const heroRouter = require('./src/routes/heroRouter')(Hero);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/heroesdB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/heroes', heroRouter);

app.listen(port, () => {
	debug(`Server is running in port ${chalk.blue(port)}...`);
});
