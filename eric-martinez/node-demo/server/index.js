const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgn('dev'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, 'eric-martinez/node-demo/server/node_modules')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/view/', '/index.html'));
})


app.listen(port, () => {
	debug(`Server is running in port ${chalk.green(port)}...`);
});
