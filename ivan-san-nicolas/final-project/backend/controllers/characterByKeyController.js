/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
function characterByKeyController(Character) {
  function getMethod(req, res) {
    const { characterUniqueKey, userId } = req.query;
    const query = { owner: userId, uniqueKey: characterUniqueKey };
    const callback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };

    Character.findOne(query)
      .populate('owner')
      .exec(callback);
  }
  return {
    getMethod,
  };
}

module.exports = characterByKeyController;
