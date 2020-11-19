const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const User = require('./src/models/userModel');
const Address = require('./src/models/addressModel');
const Country = require('./src/models/countryModel');
const userRouter = require('./src/routes/userRouter')(User);
const addressRouter = require('./src/routes/userRouter')(Address);
const countryRouter = require('./src/routes/countryRouter')(Country);

const app = express();

const port = process.env.PORT || 1800;

const dbURL = process.env.DBURL || 'mongodb://localhost/clientdb';

connect(dbURL);

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
  res.send('It works');
});

app.use('/users', userRouter);
app.use('/address', addressRouter);
app.use('/country', countryRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
