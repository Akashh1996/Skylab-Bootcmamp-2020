const express = require('express');
const debug = require('debug')('todoApp');
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoApp = express();
const port = process.env.PORT || 5000;

todoApp.use(cors());
todoApp.use(morgan('tiny'));
todoApp.use(bodyParser.urlencoded({ extended: true }));
todoApp.use(bodyParser.json());

todoApp.listen(port, () => {
  debug(`Server is running on port ${chalk.yellowBright(port)}`);
});
