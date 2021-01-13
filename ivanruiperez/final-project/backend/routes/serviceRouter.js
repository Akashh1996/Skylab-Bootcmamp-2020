const express = require('express');
const servicesController = require('../controllers/servicesController');
const serviceNameController = require('../controllers/serviceNameController');

function serviceRouter(Service) {
  const router = express.Router();
  const services = servicesController(Service);
  const serviceName = serviceNameController(Service);

  router.route('/')
    .get(services.getMethod)
    .post(services.postMethod)
    .put(serviceName.getMethod);

  return router;
}

module.exports = serviceRouter;
