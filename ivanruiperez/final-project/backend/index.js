const express = require('express');
const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const userRouter = require('./routes/userRouter')(User);
const Service = require('./models/serviceModel');
const serviceRouter = require('./routes/serviceRouter')(Service);
const Barber = require('./models/barberModel');
const barberRouter = require('./routes/barberRouter')(Barber);
const Reservation = require('./models/reservation');
const reservationRouter = require('./routes/reservationRouter')(Reservation);

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DBURL || 'mongodb+srv://projectivan:1234irp@cluster0.ysrat.mongodb.net/dbmonclus?retryWrites=true&w=majority';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/views', 'index.html'));
});

app.use('/users', userRouter);
app.use('/services', serviceRouter);
app.use('/barbers', barberRouter);
app.use('/reservations', reservationRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${chalk.green(port)}`);
});
