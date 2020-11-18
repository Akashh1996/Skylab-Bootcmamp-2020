const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const heroRoutes = require('./routes/routes')();
app.use('/', heroRoutes);

app.listen(port, () => {
	console.log(`App listening on port ${port}...`);
});
