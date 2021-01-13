function questionsController(Question) {
  function getMethod(req, res) {
    const { query } = req;

    Question.find(query)
      .populate({ path: 'answers', populate: { path: 'user' } })
      .populate('owner')
      .exec((errorFindQuestion, questions) => {
        if (errorFindQuestion) {
          return res.send(errorFindQuestion);
        }
        return res.json(questions);
      });
  }
  function getQuestionsUser(req, res) {
    const { userId } = req.params;
    Question.find({ owner: userId })
      .populate({ path: 'answers', populate: { path: 'user' } })
      .populate('owner')
      .exec((errorFindQuestion, questions) => {
        if (errorFindQuestion) {
          return res.send(errorFindQuestion);
        }
        return res.json(questions);
      });
  }

  function deleteMethod(req, res) {
    const query = req.query._id;
    const body = req.query;
    function deleteCallback(errorDeleteQuestion, removedQuestion) {
      return errorDeleteQuestion ? res.send(errorDeleteQuestion) : res.json(removedQuestion);
    }
    Question.findByIdAndRemove(query, body, deleteCallback);
  }

  function putMethod({ body }, res) {
    const query = body._id;
    function putCallback(errorFindQuestion, updatedQuestion) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(updatedQuestion);
    }
    Question.findByIdAndUpdate(query, body, putCallback);
  }

  function postMethod({ body }, res) {
    const newQuestion = body;
    function postCallback(errorFindQuestion, createdNewQuestion) {
      return errorFindQuestion ? res.send(errorFindQuestion) : res.json(createdNewQuestion);
    }
    Question.create(newQuestion, postCallback);
  }
  return {
    getMethod, deleteMethod, putMethod, postMethod, getQuestionsUser,
  };
}

module.exports = questionsController;
