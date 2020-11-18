const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
const Input = require('./src/models/inputModel');
const inputRouter = require('./src/routes/inputRoutes')(Input);

const dbURL = process.env.DBURL || 'mongodb://localhost/ToDo';
const app = express();
app.use(cors());
const port = process.env.PORT || 1220;

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/input', inputRouter);

app.listen(port, () => debug(`Example app Listening on port ${port}`));
