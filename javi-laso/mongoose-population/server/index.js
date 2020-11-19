const express = require('express');
const debug = require('debug')('server');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const { connect } = require('mongoose');
const userSchema = require('./src/models/userSchema');
const addressSchema = require('./src/models/addressSchema');
const countrySchema = require('./src/models/countrySchema');
const userRouter = require('./src/routers/userRouter')(userSchema, addressSchema, countrySchema);
const addressRouter = require('./src/routers/addressRouter')(addressSchema);
const countryRouter = require('./src/routers/countryRouter')(countrySchema);

const server = express();
const port = process.env.PORT || 3500;
const dbUrl = process.env.DBURL || 'mongodb://localhost/mongoosepopulatedb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

server.use(morgan('dev'));
server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', userRouter);
server.use('/addresses', addressRouter);
server.use('/countries', countryRouter);

server.listen(port, () => {
  debug(`Server listening on port ${chalk.blueBright(port)}...`);
});
