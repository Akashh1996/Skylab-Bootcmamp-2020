const express = require('express');
const routerTest = express.Router();

function routes () {
    routerTest.route('/')
    .get((req, res) => {
        console.log('Receiving GET request...');
        const sum = 2 + 2;
        res.end(`${sum}`);
    })
    .post((requ, res) => {
        res.end('Post is working');
    });
    
    routerTest.route('/user')
    .get((req,res) => {
        res.end('User get is working');
    })
    .post((req, res) => {
        res.end('User post is working');
    });

    return routerTest;
}

module.exports = routes;