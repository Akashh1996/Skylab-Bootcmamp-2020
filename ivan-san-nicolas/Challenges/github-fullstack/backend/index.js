const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const Users = require('./models/userModel');
const userRouter = require('./routes/userRouter')(Users);

const app = express();
const port = process.env.PORT || 1240;
const DataBaseURL = process.env.DBURL || 'mongodb://localhost/githubdb';

connect(DataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
