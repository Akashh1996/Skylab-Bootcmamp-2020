export {}
const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const cors = require('cors');
const ProductModel = require('./src/models/productModel')
const userModel = require('./src/models/userModel')
const recipesRoutes = require('./src/routes/recipesRoutes')();
const groceryListRoutes = require('./src/routes/groceryListRoutes')(ProductModel);
const userRoutes = require('./src/routes/userRoutes')(userModel);

const app = express();
app.use(cors());

const port = process.env.PORT || 2000;
const dbURL = process.env.DATABASEURL || 'mongodb://localhost/fooddb';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/recipes', recipesRoutes);
app.use('/list', groceryListRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server's running on port ${port}`);
});
