/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
function characterController(Character) {
  function getMethod(req, res) {
    const { characterId } = req.query;
    const query = { _id: characterId };
    const callback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };

    Character.findOne(query)
      .populate('owner')
      .exec(callback);
  }

  function patchMethod(req, res) {
    const { characterId, updatedCharacter } = req.body;
    const query = { _id: characterId };

    Character.findOneAndUpdate(query, updatedCharacter, { new: true }, (error, character) => {
      error ? res.send(error) : res.json(character);
    });
  }

  function deleteMethod(req, res) {
    const characterId = req.query['0'];

    const query = { _id: characterId };

    Character.findOneAndDelete(query, (error, deletedCharacter) => {
      error ? res.send(error) : res.json(deletedCharacter);
    });
  }

  function postMethod(req, res) {
    const { newCharacter } = req.body;
    Character.create(newCharacter, (error, character) => {
      error ? res.send(error) : res.json(character);
    });
  }

  return {
    getMethod,
    patchMethod,
    deleteMethod,
    postMethod,
  };
}

module.exports = characterController;
