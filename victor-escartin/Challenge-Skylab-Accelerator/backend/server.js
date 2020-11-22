const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Project = require('./models/projectModel');
const projectRouter = require('./routers/projectRouter')(Project)

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/AkashVictor-Accelerator', { useNewUrlParser: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
