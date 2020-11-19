const express = require('express');
const chalk = require('chalk');
const path = require('path');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./src/models/usersModel');
const Addresses = require('./src/models/addressesModel');
const Countries = require('./src/models/countriesModel');
const usersRouter = require('./src/routes/usersRouter')(Users);
const addressesRouter = require('./src/routes/addressesRouter')(Addresses);
const countriesRouter = require('./src/routes/countriesRouter')(Countries);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const dataBaseURL = process.env.dbURL.trim() || 'mongodb://localhost/UserInfo';

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.use('/users', usersRouter);
app.use('/address', addressesRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => (`Server is running on port ${chalk.blue(port)}`));
