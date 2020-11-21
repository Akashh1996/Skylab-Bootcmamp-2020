/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const listItems = require('./models/listModels');
const listRoutes = require('./routes/listRoutes')(listItems);
const detailRoutes = require('./routes/detailRoutes')(listItems);
const loginRoutes = require('./routes/loginRoutes')();
const oauthRoutes = require('./routes/oauthRoutes')();

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const database = process.env.ListDB || 'mongodb://localhost/listgithubDB';
connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use('/', listRoutes);
app.use('/detail', detailRoutes);
app.use('/login', loginRoutes);
app.use('/oauth-callback', oauthRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
