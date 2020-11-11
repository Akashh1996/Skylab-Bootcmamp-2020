const express = require('express');
const testRoute = require('./src/routes/routes');

const app = express();

const port = process.env.PORT || 1240;

app.use('/', testRoute);

app.listen(port, () => {
	console.log(`server up and running in port ${port}`);
});
