const express = require('express');

const routerTest = express.Router();

function routes() {
    routerTest.route('/').get((req, res) => {
        console.log('HOLA RECIBO GET')

        res.send('Hola, si que funciono')
    })
        .post((req, res) => {
            res.write('Hola, soy un post')
            res.write('Hskdfjhskdfjhskdjfhskdjfh')
            res.end('asjdhasgdjhasgd');

        })
        .put((req, res) => {
            res.write('Hola, soy un put')
            res.write('Hskdfjhskdfjhskdjfhskdjfh')
            res.end('asjdhasgdjhasgd');

        })
        .delete((req, res) => {
            res.send('Hola, soy un delete')
            res.send('Hskdfjhskdfjhskdjfhskdjfh')
            res.end('asjdhasgdjhasgd');

        })

    routerTest.route('/pepe').get((req, res) => {
        res.send('Hola, soy pepe')
    })


    return routerTest
}

module.exports = routes();