const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const mongoose= require('mongoose');
const Tupper = require('./src/models/tupperModel');
const Recipe = require('./src/models/recipeModel');
const Review = require('./src/models/reviewModel');
const User = require('./src/models/userModel');
const tupperRouter = require('./src/routes/tupperRouter')(Tupper)
const userRouter = require('./src/routes/userRouter')(User)
const recipeRouter = require('./src/routes/recipeRouter')(Recipe)
const reviewRouter = require('./src/routes/reviewRouter')(Review)



const app = express();

app.use(cors());
const port = process.env.PORT || 5200;
const URLdb = process.env.DB || 'mongodb://localhost/tupperShare';

mongoose.connect(URLdb, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/tupper', tupperRouter);
app.use('/recipe', recipeRouter);
app.use('/review', reviewRouter);


app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
