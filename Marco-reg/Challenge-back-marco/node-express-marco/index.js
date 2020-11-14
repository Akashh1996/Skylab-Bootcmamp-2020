const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3020;
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

uuidv4();
const pokeRoute = require('./routes/pokeRoutes')();
app.use('/pokemons', pokeRoutes);

const testRoute = require('./routes/routes');

const app = express();
app.use(cors());

app.use('/', testRoute);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
