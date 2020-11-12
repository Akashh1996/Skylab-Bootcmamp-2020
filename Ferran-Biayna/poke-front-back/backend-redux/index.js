const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1240;

const testRoute = require('./src/routes/routes');
app.use('/', testRoute);

const pokeRoute = require('./src/routes/pokeRoutes');
app.use('/pokemons', pokeRoute)

app.listen(port, () => {
	console.log(`server up and running in port ${port}`);
});
