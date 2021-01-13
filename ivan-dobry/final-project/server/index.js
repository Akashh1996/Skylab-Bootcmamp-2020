const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pets = require('./models/petModel');
const petRoutes = require('./routes/petRoutes')(pets);
const user = require('./models/userModel');
const userRoutes = require('./routes/userRoutes')(user);

const app = express();
const port = process.env.PORT || 1970;

const dataBase = process.env.petrefugeDB || 'mongodb://localhost/petrefugedb';
mongoose.connect(dataBase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', petRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
