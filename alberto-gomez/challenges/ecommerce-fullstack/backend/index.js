const express = require('express');
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const componentRouter = require('./src/routes/componentRouter')();
const cartRouter = require('./src/routes/cartRouter')();

const app = express();
const port = process.env.PORT = 5000;

// CORS ???
const cors = require('cors');
app.use(cors());

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('short')) // CUANDO SE HAGAN PETICIONES, APARECE INFO EN CONSOLA


// ESTABLECIENDO RUTAS A LOS RECURSOS
app.use(express.static(path.join(__dirname, '/public/'))); // ARCHIVOS DESDE CARPETA 'PUBLIC'
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))); // BOOTSTRAP CSS
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))); // BOOTSTRAP JS

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
})

app.use('/components', componentRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
    debug(`Server running in port ${chalk.blue(port)}.`)
})