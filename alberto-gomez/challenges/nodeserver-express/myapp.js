// Importamos express
const express = require('express');
const cors = require('cors');
// Creamos el servidor
const app = express();

app.use(cors());
// Configuramos el comportamiento del servidor cuando le llega una "GET" request
app.get('/', (req, res) => {
	res.send('Hello World!');
});
// Ponemos el servidor a escuchar en el puerto 3000 y le decimos que cuando se levante imprima el console.log
app.listen(3000, () => console.log('Example app listening on port 3000!'));
