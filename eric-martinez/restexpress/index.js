const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1240;

const testRoutes = require('./routes/routes')();
app.use('/', testRoutes);

const pokeRoutes = require('./routes/pokeRoutes')();
app.use('/pokemons', pokeRoutes);

app.listen(port, () => {
	console.log(`Esto funciona  en el puerto ${port}`);
});
