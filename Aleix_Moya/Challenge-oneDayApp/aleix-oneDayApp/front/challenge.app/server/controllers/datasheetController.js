function datasheetController(Datasheet) {
  function getMethod(req, res) {
    res.json(Datasheet.getDatasheet());
  }
  function putMethod(req, res) {
    Datasheet.addToCarrito(req.body);

    res.json(Datasheet.getWargear());
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = datasheetController;
