function listController(List) {
  function getMethod(req, res) {
    res.send('working');
  }
  function putMethod(req, res) {
    const query = req.body;
    List.create(query, (errorPutList, list) => (errorPutList
      ? res.send(errorPutList)
      : res.json(list)));
  }
  return { getMethod, putMethod };
}

module.exports = listController;
