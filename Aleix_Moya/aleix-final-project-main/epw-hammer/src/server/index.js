const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const cors = require('cors');
const Stats = require('./src/models/main');
const Harlequins = require('./src/models/harlequins');
const Necrons = require('./src/models/necrons');
const myRouter = require('./src/routes/mainRouter')(Stats, Harlequins, Necrons);

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DATABASE || 'mongodb://localhost/wargeardb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/', myRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
