const express = require('express');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const User = require('./src/models/userModel');
const Address = require('./src/models/addressModel');
const Country = require('./src/models/countryModel');
const userRoutes = require('./src/routes/userRoutes')(User);
const addressRoutes = require('./src/routes/addressRoutes')(Address);
const countryRoutes = require('./src/routes/countryRoutes')(Country);

const app = express();
app.use(cors());
const port = process.env.PORT || 7000;
const dbURL = process.env.DATABASEURL || 'mongodb://localhost/userdb';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use('/users', userRoutes);
app.use('/addresses', addressRoutes);
app.use('/countries', countryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
