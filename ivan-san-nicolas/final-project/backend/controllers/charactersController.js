function charactersController(Character) {
  function getMethod(req, res) {
    const { ownerId } = req.query;
    const query = { owner: ownerId };
    const findCharactersCallback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };
    Character.find(query)
      .populate('owner')
      .exec(findCharactersCallback);
  }

  return {
    getMethod,
  };
}

module.exports = charactersController;
