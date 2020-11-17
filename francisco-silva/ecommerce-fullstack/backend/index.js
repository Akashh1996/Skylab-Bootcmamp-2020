const express = require('express');
const path = require('path');
const cors = require('cors');

const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./src/models/productModel');
const productRouter = require('./src/routes/productRouter')(Product);

const app = express();
app.use(cors());
const port = process.env.PORT || 2319;

mongoose.connect('mongodb://localhost/productsdb');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.use('/products', productRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${chalk.blue(port)}`);
});

/* >>> PARA LEVANTAR MONGO <<<<
 mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
*/
