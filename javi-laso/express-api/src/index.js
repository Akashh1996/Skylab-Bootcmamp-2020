const express = require('express');
// const cors = require('cors');
// import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = process.env.PORT || 2130;

const testRoute = require('../routes/routes')();
app.use('/', testRoute);

// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});
