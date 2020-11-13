const express = require('express');
const chalk = require('chalk');
const debug = require('debug');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('This is works');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  debug(`Server is running on port ${chalk.blue(port)}`);
});
