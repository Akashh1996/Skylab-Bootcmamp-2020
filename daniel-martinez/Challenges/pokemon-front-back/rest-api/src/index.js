const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const testRoute = require('../routes/routes');
app.use('/', testRoute);

const pokeRoutes = require('../routes/pokeRoutes');
app.use('/pokemons', pokeRoutes);

const port = process.env.PORT || 1240;
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
