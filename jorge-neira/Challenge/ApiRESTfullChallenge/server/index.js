const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Setup
const heroApp = express();
heroApp.use(cors());
heroApp.use(bodyParser.urlencoded({ extended: true }));
heroApp.use(bodyParser.json());
//Port Configuration
const port = process.env.PORT || 9090;
//Server Start
const heroListRoute = require('./routes/listRoute');
heroApp.use('/', heroListRoute);

const heroDetailRoute = require('./routes/detailRoute');
heroApp.use('/heroes', heroDetailRoute);

heroApp.listen(port, () => {
	console.log(`HeroApp running on port ${port}...`);
});
