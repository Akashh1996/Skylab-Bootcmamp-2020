const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1110;

const heroRoutes = require('./routes/heroRoutes');
app.use('/heroes', heroRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
