const express = require('express')

const routerTest = express.Router()

function routes() {
    routerTest.route('/')
        .get((req, res) => {
            res.send('Hola, si que funciona')
        })
        .post((req, res) => {
            res.send('este es el post')
        })
        .put((req, res) => {
            res.send('este es el put')
        })
        .delete((req, res) => {
            res.send('este es el delete')
        })

    return routerTest
}

module.exports = routes;