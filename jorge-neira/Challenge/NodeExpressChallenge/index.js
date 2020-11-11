const express = require('express')
const testRoute = require('./routes/routes');

const app = express();
const port = process.env.PORT || 9192;

app.use('/', testRoute);
app.listen(port, () => {
	console.log(`Escuchando en puerto ${port} correctamente...`);
});
