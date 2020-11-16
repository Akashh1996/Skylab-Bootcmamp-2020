const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3020;
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
uuidv4();
const productRoute = require('./routes/productRoute');

app.use('/products', productRoute);
const testRoute = require('./routes/productRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', testRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
