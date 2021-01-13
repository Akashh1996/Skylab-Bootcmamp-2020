function charactersByFilterController(Character) {
  function getMethod(req, res) {
    const { filter, filterValue } = req.query;
    const query = { [filter]: filterValue };
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

module.exports = charactersByFilterController;
