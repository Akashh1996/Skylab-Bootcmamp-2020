/* eslint-disable no-console */
function detailController(list) {
  function getMethod(req, res) {
    const query = { projectName: req.query.projectName };
    list.findOne(query, (errorFindDetail, detail) => (
      errorFindDetail ? res.send(errorFindDetail) : res.json(detail)
    ));
  }

  return {
    getMethod,
  };
}

module.exports = detailController;
