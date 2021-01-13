const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const challengeSchema = require('./src/models/challengeSchema');
const challengeRouter = require('./src/routes/challengeRouter')(challengeSchema);
const userSchema = require('./src/models/userSchema');
const userRouter = require('./src/routes/userRouter')(userSchema);

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DBURL || 'mongodb://localhost/noalonedb';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/challenges', challengeRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(port, () => {
  debug(`Server running on port ${chalk.blueBright(port)}...`);
});
