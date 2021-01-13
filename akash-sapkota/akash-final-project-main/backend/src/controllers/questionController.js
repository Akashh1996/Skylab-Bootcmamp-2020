function questionController(Question) {
  function getMethod(req, res) {
    const query = req.id;
    Question.findById(query)
      .populate({ path: 'answers', populate: { path: 'user' } })
      .populate({ path: 'owner' })
      .exec((errorFindQuestion, questions) => {
        if (errorFindQuestion) {
          return res.send(errorFindQuestion);
        }
        return res.json(questions);
      });
  }

  function putMethod({ body }, res) {
    const query = body.questionId;
    function putCallback(errorFindQuestion, updatedQuestion) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(updatedQuestion);
    }

    Question.findByIdAndUpdate(query, body, putCallback);
  }

  function allMiddleware(req, res, next) {
    req.id = req.params.questionId;
    next();
  }
  return {
    getMethod, putMethod, allMiddleware,
  };
}

module.exports = questionController;
