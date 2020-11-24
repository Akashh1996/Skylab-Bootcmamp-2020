const express = require('express');
const app = express();

const port = process.env.PORT || 1240;

//routes
const testRoute = require('./routes/routes')();
app.use('/', testRoute);

// starting the server
app.listen(port, () => {
	console.log(`Server funcionando en el puerto ${port}`);
});
