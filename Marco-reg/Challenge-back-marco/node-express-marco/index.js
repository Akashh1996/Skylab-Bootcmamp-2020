const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3020;
const { v4: uuidv4 } = require('uuid');

uuidv4();

const testRoute = require('./routes/routes');

const app = express();

app.use('/', testRoute);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
