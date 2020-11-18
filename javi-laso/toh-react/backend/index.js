const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const superHeroSchema = require('./models/superHeroSchema');
const cartSchema = require('./models/cartSchema');
const heroRouter = require('./routes/routes')(superHeroSchema, cartSchema);

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const dbUrl = process.env.DBURL || 'mongodb://localhost/superherodb';

connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', heroRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
