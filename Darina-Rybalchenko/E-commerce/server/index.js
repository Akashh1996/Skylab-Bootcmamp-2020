const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./src/stores/productStore');
const productRouter = require('./src/routes/productsRouter')(Product);
const basketRouter = require('./src/routes/basketRouter')(Product);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('It works');
});

app.use('/list', productRouter);
app.use('/basket', basketRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  debug(`Server is running on port ${chalk.blue(port)}`);
});
