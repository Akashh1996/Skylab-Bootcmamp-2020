const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const { connect } = require('mongoose');
const projectSchema = require('./src/models/projectSchema');
const projectRouter = require('./src/routers/projectRouter')(projectSchema);

const app = express();
const port = process.env.PORT || 2130;
const dbUrl = process.env.DBURL || 'mongodb://localhost/acceleratordb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/projects', projectRouter);
// app.use('/users', userRouter);
// app.use('/github', githubRouter);

app.listen(port, () => {
  debug(`Server listening on port ${chalk.blueBright(port)}...`);
});
