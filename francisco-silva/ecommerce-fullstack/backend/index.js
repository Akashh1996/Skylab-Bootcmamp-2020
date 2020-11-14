const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productsRoutes')();

const port = process.env.PORT || 3020;

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
uuidv4();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', productRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
