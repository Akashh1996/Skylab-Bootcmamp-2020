const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Sabers = require('./models/saberModel');
const sabersRoutes = require('./routes/sabersRoutes')(Sabers);
const Cart = require('./stores/cartStore');
const cartRoutes = require('./routes/cartRoutes')(Cart);


const app = express();
const port = process.env.PORT || 1240;

mongoose.connect("mongodb://localhost/sabersdb");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/sabers', sabersRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => {
  console.log(`Server working in port ${port}`);
});
