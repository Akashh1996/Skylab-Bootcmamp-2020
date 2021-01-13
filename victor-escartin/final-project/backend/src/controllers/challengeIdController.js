function challengeIdController(challengeSchema) {
  function getByIdMethod(req, res) {
    const query = { _id: req.params.challengeId };
    const getCallBack = (getError, challenges) => (
      getError ? res.send(getError) : res.send(challenges)
    );
    challengeSchema.findOne(query)
      .exec(getCallBack);
  }

  return { getByIdMethod };
}

module.exports = challengeIdController;
