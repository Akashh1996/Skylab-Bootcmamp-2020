const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 2020;

const testRoute = require('./routes/routes')();
app.use('/', testRoute);
app.listen(port, () => {
	console.log(`it just works, port ${port}`);
});
