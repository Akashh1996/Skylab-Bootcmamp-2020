const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Input = require('./src/models/inputModel');
const inputRouter = require('./src/routes/inputRoutes')(Input);

const app = express();
app.use(cors());
const port = process.env.PORT || 1220;

mongoose.connect('mongodb://localhost/ToDo');
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/input', inputRouter);

app.listen(port, () => debug(`Example app Listening on port ${port}`));
