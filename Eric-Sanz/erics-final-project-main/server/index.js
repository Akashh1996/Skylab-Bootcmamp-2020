const express = require('express');
const debug = require('debug');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connect } = require('mongoose');
const Videogame = require('./src/models/videogameModel');
const User = require('./src/models/userModel');
const videogameRouter = require('./src/routes/videogameRoutes')(Videogame);
const userRouter = require('./src/routes/userRoutes')(User);

const app = express();
const port = process.env.PORT || 1728;
const dbURL = process.env.dbURL || 'mongodb://localhost/videoGamesdb';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', videogameRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
