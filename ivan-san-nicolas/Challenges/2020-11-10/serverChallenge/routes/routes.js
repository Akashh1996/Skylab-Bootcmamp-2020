const express = require('express');
const routerTest = express.Router();

function routes () {
    routerTest.route('/')
    .get((req, res) => {
        res.end('Get is working');
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