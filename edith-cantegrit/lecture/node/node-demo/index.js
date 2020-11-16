const express = require('express');
const path = require('path');
const debug = require('debug')('app*');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 5000; 

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use(express.static(path.join('/Users/htide/Documents/Programming/skylab-bootcamp-202010/edith-cantegrit/Rakuten/')));
app.use(express.static(path.join('/Users/htide/Documents/Programming/skylab-bootcamp-202010/edith-cantegrit/challenge/maria-lunarillos')));


app.use(morgan('tiny'));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index.html' ));
})

app.get('/lunarillos',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index_mariaLunarillos.html' ));
})

app.get('/rakuten',(req, res) => {
    res.sendFile(path.join(__dirname, 'src/views', 'index_Rakuten.html'));
})


app.get('/profile',(req, res) => {
    res.send('Welcome to profile')
})

app.listen(port, function(errorListen) {
    debug(`server is running on ${port}`)
})