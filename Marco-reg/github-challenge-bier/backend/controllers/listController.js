function listController(List) {
  function getMethod(req, res) {
    const query = {};
    List.find(query, (errorFindList) => (errorFindList
      ? res.send(errorFindList)
      : res.send('this is workin fine')));
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
