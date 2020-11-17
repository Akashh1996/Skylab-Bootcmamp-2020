function listController(Wargear) {
  function getMethod(req, res) {
    res.json(Wargear.getWargear());
  }
  function putMethod(req, res) {
    Wargear.addToCarrito(req.body);

    res.json(Wargear.getWargear());
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = listController;
