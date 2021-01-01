const express = require('express');
const path = require('path');
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
// const testRoute = require('./src/routes/routes');

const app = express();

const port = process.env.PORT || 1240;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/views', 'index.html'))
})

app.get('/heroes', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/views', 'toh-home.html'))
})

app.get('/lunarillos', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/views', 'lunarillos-index.html'))
})

// app.use('/', testRoute);

app.listen(port, () => {
	console.log(`server up and running in port ${chalk.blue(port)}`);
});
