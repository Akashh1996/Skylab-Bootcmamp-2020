const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const listRoutes = require('./routes/listRoutes')();

const app = express();
app.use(cors());

const port = process.env.PORT || 3020;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', listRoutes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
