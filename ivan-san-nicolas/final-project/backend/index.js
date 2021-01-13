const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { connect } = require('mongoose');
const User = require('./models/userModel');
const usersRouter = require('./routes/usersRoutes')(User);
const userRouter = require('./routes/userRoutes')(User);
const Character = require('./models/characterModel');
const charactersRouter = require('./routes/charactersRoutes')(Character);
const characterRouter = require('./routes/characterRoutes')(Character);

const app = express();
const port = process.env.PORT || 1240;
const DataBaseURL = process.env.DBURL || 'mongodb://localhost/absalomdb';

app.use(morgan('tiny'));

connect(DataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb', extended: true }));

app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/characters', charactersRouter);
app.use('/character', characterRouter);

app.listen(port, () => {
  console.log(`Server working at port ${port}`);
});
