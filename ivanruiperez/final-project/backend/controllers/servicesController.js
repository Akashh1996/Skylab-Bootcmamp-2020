function servicesController(Service) {
  function getMethod(req, res) {
    const query = {};
    Service.find(query, (errorFindServices, services) => {
      if (errorFindServices) {
        res.send(errorFindServices);
      } else {
        res.json(services);
      }
    });
  }

  function postMethod(req, res) {
    const query = req.body;
    Service.create(query, (errorFindServices, services) => {
      if (errorFindServices) {
        res.send(errorFindServices);
      } else {
        res.json(services);
      }
    });
  }

  return {
    getMethod, postMethod,
  };
}

module.exports = servicesController;
