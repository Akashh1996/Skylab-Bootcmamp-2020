const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Setup
const heroApp = express();
heroApp.use(cors());
heroApp.use(bodyParser.json());
heroApp.use(bodyParser.urlencoded({ extended: true }));
//Port Configuration
const port = process.env.PORT || 9090;
//Server Start
const heroRoutes = require('./routes/routes');
heroApp.use('/', heroRoutes);

heroApp.listen(port, () => {
	console.log(`HeroApp running on port ${port}...`);
});
