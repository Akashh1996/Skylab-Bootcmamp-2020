const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/view/', '/index.html'));
})
app.get('/rakuten', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/view/', '/rakuten.html'));
})
app.get('/lunarillos', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/view/', '/lunarillos.html'));
})


app.listen(port, () => {
	debug(`Server is running in port ${chalk.green(port)}...`);
});
