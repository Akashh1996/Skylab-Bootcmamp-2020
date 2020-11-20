const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const User = require('./models/userModel');
const userRouter = require('./routes/userRouter')(User);


const app = express();
const port = process.env.PORT || 3000;
const dbURL = process.env.dbURL || 'mongodb://localhost/AkashVictor-Accelerator';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/boostrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/boostrap/dist/js')));

app.get('/', (req, res) => {
  res.send('Server is ready for Akash and Victor');
});

app.use('/users', userRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});