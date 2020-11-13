const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const heroRoutes = require('./routes/routes')()

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT || 1240;

app.listen(port, () => {
	console.log(`Esto funciona en el puerto ${port}`);
});

// Configuramos las rutas
app.use('/heroes', heroRoutes)