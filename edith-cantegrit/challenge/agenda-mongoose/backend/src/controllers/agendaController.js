function agendaController(Persons) {
  function getMethod(req, res) {
    const query = {};
    Persons.find(query, (errorFindPersons, findPersons) => {
      if (errorFindPersons) {
        return res.send(errorFindPersons);
      }
      return res.json(findPersons);
    });
  }

  function putMethod(req, res) {
    const query = req.body;
    Persons.create(query, (errorFindPersons, findPersons) => {
      if (errorFindPersons) {
        return res.send(errorFindPersons);
      }
      return res.json(findPersons);
    });
  }

  return { getMethod, putMethod };
}

module.exports = agendaController;
