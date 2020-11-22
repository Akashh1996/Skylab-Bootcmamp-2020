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

  function deleteMethod({ body }, res) {
    console.log(body);
    list.findOneAndRemove((body), (errorDeleteItem) => (
      errorDeleteItem
        ? res.send(errorDeleteItem)
        : res.send('item deleted ...')
    ));
  }
  return { getMethod, putMethod, deleteMethod };
}

module.exports = listController;
