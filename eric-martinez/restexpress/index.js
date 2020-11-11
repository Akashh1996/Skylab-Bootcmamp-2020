const express = require('express');

const app = express();

const port = process.env.PORT || 1240;

const testRoutes = require('./routes/routes')();
app.use('/', testRoutes);

app.listen(port, () => {
	console.log(`Esto funciona  en el puerto ${port}`);
});
