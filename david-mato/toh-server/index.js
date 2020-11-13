const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1250;

const heroRouter = require('./routes/routes')();
app.use('/heroes', heroRouter);

app.listen(port, () => {
	console.log(`Esto funciona en el puerto ${port}`);
});
