const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');
const { connect } = require('mongoose');
const userSchema = require('./src/models/userSchema');
const addressSchema = require('./src/models/addressSchema');
const countrySchema = require('./src/models/countrySchema');
const userRouter = require('./src/routers/userRouter')(userSchema, addressSchema, countrySchema);

const server = express();
const port = process.env.PORT || 3500;
const dbUrl = process.env.DBURL || 'mongodb://localhost/mongoosepopulatedb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

server.use(morgan('dev'));
server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', userRouter);

server.listen(port, () => {
  debug(`Server listening on port ${chalk.blueBright(port)}...`);
});
