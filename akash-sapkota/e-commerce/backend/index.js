const cors = require('cors');
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Product = require('./src/stores/productStore');
const productRouter = require('./src/routes/productRouter')(Product);

const app = express();
const port = process.env.PORT || 6000;

app.use(morgan('tiny'));
app.use(cors);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/products', productRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
