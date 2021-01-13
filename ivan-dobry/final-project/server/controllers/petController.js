function PetController(pets) {
  function getMethod(req, res) {
    const query = { _id: req.query.id };
    pets.findById(query, (errorFindPet, pet) => (
      errorFindPet
        ? res.send(errorFindPet)
        : res.json(pet)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = PetController;
