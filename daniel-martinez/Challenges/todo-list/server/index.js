const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const TvShows = require('./src/models/tvShowModel');
const routes = require('./src/routes/routes')(TvShows);

const app = express();
const port = process.env.PORT || 5500;

const mongoURL = process.env.URL || 'mongodb://localhost/todolist';
connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});
