const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Question = require('./src/models/questionsModel');
const Answer = require('./src/models/answerModel');
const User = require('./src/models/userModel');
const questionsRouter = require('./src/routers/questionsRouter')(Question, Answer);
const questionRouter = require('./src/routers/questionRouter')(Question, Answer);
const answerRouter = require('./src/routers/answerRouter')(Answer, Question);
const userRouter = require('./src/routers/userRouter')(User);
require('dotenv').config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const URLDB = 'mongodb+srv://Akash-1996:6yafTYVLR6jESzFA@mern.rgosa.mongodb.net/codeflowdb?retryWrites=true&w=majority';

mongoose.connect(URLDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/questions', questionsRouter);
app.use('/question', questionRouter);
app.use('/answers', answerRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  debug(`server is running on port ${chalk.blue(port)}`);
});
