function serviceNameController(Service) {
  function getMethod(req, res) {
    const query = { name: req.query.name };

    Service.findOne(query, (errorFindServices, service) => {
      if (errorFindServices) {
        res.send(errorFindServices);
      } else {
        res.json(service);
      }
    });
  }

  return {
    getMethod,
  };
}

module.exports = serviceNameController;
