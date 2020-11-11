const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 1240;

const testRoute = require('./routes/routes')();
app.use('/', testRoute);

app.listen(port, () => {
	console.log(`esto funciona en el puerto ${port}`);
});
