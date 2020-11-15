const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const Product = require('./src/stores/productStore');
const productsRouter = require('./src/routes/productsRouter')(Product);

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productsRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
