const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routerTest = require('./routes/routes');
app.use('/', routerTest);
app.use('/heroes/:heroId', routerTest);

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
