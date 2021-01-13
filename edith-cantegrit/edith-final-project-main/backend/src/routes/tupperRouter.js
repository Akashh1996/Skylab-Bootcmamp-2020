const { Router } = require('express');
const tupperController = require('../controllers/tupperController');
const tuppersController = require('../controllers/tuppersController');

function tupperRouter(Tupper) {
    const router =  Router();
    const tupper = tupperController(Tupper);
    const tuppers = tuppersController(Tupper);

    router.route('/')
    .get(tuppers.getMethod)

    router.route('/:tupperId')
    .get(tupper.getMethod)
    .post(tupper.postMethod)

    return router;
}

module.exports = tupperRouter;
