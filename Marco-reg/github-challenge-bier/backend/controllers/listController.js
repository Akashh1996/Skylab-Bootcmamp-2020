/* eslint-disable no-console */
function listController(list) {
  function getMethod(req, res) {
    const query = {};
    list.find(query, (errorFindList, listData) => (errorFindList
      ? res.send(errorFindList)
      : res.send(listData)
    ));
  }
  function putMethod({ body }, res) {
    list.create(body, (errorPutList) => (errorPutList
      ? res.send(errorPutList)
      : res.send('item added')
    ));
  }
  return { getMethod, putMethod };
}

module.exports = listController;
