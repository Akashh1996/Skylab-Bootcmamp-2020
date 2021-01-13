const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');

const userProfile = require('./src/models/userProfile');
const userRoutes = require('./src/routes/userRoutes')(userProfile);
const spotDetailRoutes = require('./src/models/spotDetail');
const spotRoutes = require('./src/routes/spotRoutes')(spotDetailRoutes);
const listItems = require('./src/models/spotDetail');
const listRoutes = require('./src/routes/listRoutes')(listItems);
const formRoutes = require('./src/routes/formRoutes')(listItems);

const app = express();
app.use(cors());
const port = process.env.PORT || 3020;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const database = process.env.spotsDB || 'mongodb://localhost/spotshoveit';
connect(database);

app.use('/user', userRoutes);
app.use('/spot', spotRoutes);
app.use('/spots', listRoutes);
app.use('/form', formRoutes);

app.listen(port, () => {
  console.log(`server is running on por ${port}`);
});
