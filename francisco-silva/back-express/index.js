const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('tiny'));

debug(__dirname)
app.use(express.static(path.join(__dirname, '/public')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));




app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'src/views/', 'index.html'));
})


app.get('/lunarillos', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'src/views/', 'lunarillos_index.html'));
})

app.get('/rakuten', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'src/views/', 'rakuten_detalle.html'));
})



app.listen(port, function (errorListen) {
    console.log(`Server is running on port ${chalk.blue(port)}`)
})