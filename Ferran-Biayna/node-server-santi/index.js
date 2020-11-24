const express = require('express');
const path = require('path');
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
// const testRoute = require('./src/routes/routes');

const app = express();

const port = process.env.PORT || 1240;

app.use(morgan('tiny'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

const endpoints = [{methods: ['GET', 'PUT'], url: '/heroes'},
{methods: ['GET', 'POST','DELETE'], url: '/heroes/{heroId}'}]

app.get('/', (req, res) => {
	res.render('index', {endpoints})
})

app.get('api/heroes', (req, res) => {
	res.render('toh-home');
})

app.get('/lunarillos', (req, res) => {
	res.render('lunarillos-index')
})

app.listen(port, () => {
	console.log(`server up and running in port ${chalk.blue(port)}`);
});
