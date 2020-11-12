const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9999;
const heroRoutes = require('./routes/heroRoutes')();

app.use('/heroes', heroRoutes);

app.listen(port, () => {
	console.log(`Funciona en el puerto ${port}`);
});