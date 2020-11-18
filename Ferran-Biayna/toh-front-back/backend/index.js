const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const heroesRoute = require('./routes/heroesRoute.js');
app.use('/heroes', heroesRoute)

app.listen(port, () => {
	console.log(`server up and running in port ${port}`);
});