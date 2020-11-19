const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./src/models/userModel');
const Address = require('./src/models/addressModel');
const Country = require('./src/models/countryModel');
const userRouter = require('./src/routes/userRouter')(User);
const addressRouter = require('./src/routes/addressRouter')(Address);
const countryRouter = require('./src/routes/countryRouter')(Country);

const app = express();
const port = process.env.PORT || 3333;
const dbUrl = process.env.DATABASE || 'mongodb://localhost/usersDB';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/address', addressRouter);
app.use('/country', countryRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
