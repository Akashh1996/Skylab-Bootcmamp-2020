/* eslint-disable no-console */
function petTypeController(pets) {
  function getMethod(req, res) {
    const query = { type: req.query.type };
    pets.find(query, (errorFindPet, pet) => (
      errorFindPet
        ? res.send(errorFindPet)
        : res.json(pet)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = petTypeController;
