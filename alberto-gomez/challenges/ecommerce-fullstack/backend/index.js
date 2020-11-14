const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT = 5000;

const componentRoutes = require('./routes/componentRoutes')();
app.use('/components', componentRoutes);

app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})