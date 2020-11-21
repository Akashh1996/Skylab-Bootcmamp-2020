const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const { connect } = require('mongoose');
const debug = require('debug')('app');
const projectSchema = require('./src/models/projectSchema');
const projectRouter = require('./src/routers/projectRouter')(projectSchema);
const userSchema = require('./src/models/userSchema');
const userRouter = require('./src/routers/userRouter')(userSchema);
const githubRouter = require('./src/routers/githubRouter')();
const oauthRouter = require('./src/routers/oauthRouter')(userSchema);

const app = express();
const port = process.env.PORT || 2130;
const dbUrl = process.env.DBURL || 'mongodb://localhost/acceleratordb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRouter);
app.use('/users', userRouter);
app.use('/github', githubRouter);
app.use('/oauth-callback', oauthRouter);

app.listen(port, () => {
  debug(`Server listening on port ${chalk.blueBright(port)}...`);
});
