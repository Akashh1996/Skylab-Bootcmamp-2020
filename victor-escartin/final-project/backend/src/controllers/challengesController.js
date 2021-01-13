function challengesController(challengeSchema) {
  function getChallengesMethod(req, res) {
    const query = {};
    const getCallBack = (error, challenges) => (
      error ? res.send(error) : res.send(challenges)
    );
    challengeSchema.find(query, getCallBack);
  }

  function postChallengesMethod(req, res) {
    const challenge = req.body;
    const createCallBack = (error, newChallenge) => {
      // eslint-disable-next-line no-unused-expressions
      error ? res.send(error) : res.send(newChallenge);
    };
    challengeSchema.create(challenge, createCallBack);
  }

  function putChallengeMethod(req, res) {
    const challenge = req.body._id;
    const update = req.body;
    function callback(error, updatedChallenge) {
      return error ? res.send(error) : res.send(updatedChallenge);
    }

    challengeSchema.findByIdAndUpdate(
      challenge, update, { new: true }, callback,
    );
  }

  function deleteChallengeMethod(req, res) {
    const { _id } = req.body;
    function callback(error, deletedChallenge) {
      return error ? res.send(error) : res.send(deletedChallenge);
    }

    challengeSchema.findByIdAndDelete(_id, callback);
  }

  return {
    getChallengesMethod, postChallengesMethod, putChallengeMethod, deleteChallengeMethod,
  };
}

module.exports = challengesController;
