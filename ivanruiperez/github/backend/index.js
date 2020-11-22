const express = require('express');
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const Project = require('./models/projectModel');
const User = require('./models/userModel');
const projectRouter = require('./routes/projectRouter')(Project);
const oAuthRouter = require('./routes/oauthRouter')(User);
const githubRouter = require('./routes/githubRouter')();

const app = express();
const port = process.env.PORT || 5500;
const dbURL = process.env.dbURL || 'mongodb://localhost/skylabgithub';

connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/views', 'index.html'));
});

app.use('/projects', projectRouter);
app.use('/github', githubRouter);
app.use('/oauth-callback', oAuthRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${chalk.green(port)}`);
});
