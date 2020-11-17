function listController(Wargear) {
  function getMethod(req, res) {
    console.log('RRE');
    const query = {};
    Wargear.find(query, (errorFindWargear, simplecollections) => {
      console.log('entro en find');
      if (errorFindWargear) {
        res.send(errorFindWargear);
      }
      res.json(simplecollections);
    });
    // eslint-disable-next-line spaced-comment
    //res.json(Wargear.getWargear());
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
