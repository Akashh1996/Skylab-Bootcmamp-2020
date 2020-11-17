const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const inputsSchema = require('./src/models/inputsSchema');
const inputsRouter = require('./src/routes/inputsRouter')(inputsSchema);

const server = express();
const port = process.env.PORT || 2130;

mongoose.connect('mongodb://localhost/technicaltestdb', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(morgan('dev'));

server.use(cors());

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use('/', inputsRouter);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}...`);
});
