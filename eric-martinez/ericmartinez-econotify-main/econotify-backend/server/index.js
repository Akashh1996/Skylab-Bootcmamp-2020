const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articlesRouter = require('./src/routes/articlesRouter')();
const authorsRouter = require('./src/routes/authorsRouter')();
const User = require('./src/models/userModel');
const userRouter = require('./src/routes/userRouter')(User);
const favAuthor = require('./src/routes/favAuthorRouter')(User);
const readArticles = require('./src/routes/readArticleRouter')(User);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/econotifyDB', { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/articles', articlesRouter);
app.use('/authors', authorsRouter);
app.use('/user', userRouter);
app.use('/favAuthor', favAuthor);
app.use('/readArticles', readArticles);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
