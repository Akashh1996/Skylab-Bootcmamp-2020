function answerController(Answer, Question) {
  function deleteMethod(req, res) {
    const query = req.query._id;
    function deleteCallback(errorDeleteAnswer, removedAnswer) {
      return errorDeleteAnswer ? res.send(errorDeleteAnswer) : res.json(removedAnswer);
    }
    Answer.findByIdAndRemove(query, deleteCallback);
  }
  async function postMethod({ body }, res) {
    const { questionId } = body;

    const answerObject = {
      user: body.userId,
      answerDescription: body.answerDescription,
      code: body.code,
    };

    const queryFind = { answerDescription: answerObject.answerDescription };
    try {
      await Answer.create(answerObject);
      const answerFound = await Answer.findOne(queryFind).populate('user');

      const answerId = answerFound._id;

      const foundQuestion = await Question.findOne({ _id: questionId });
      foundQuestion.answers.push(answerId);
      await foundQuestion.save();

      res.json(answerFound);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    deleteMethod, postMethod,
  };
}

module.exports = answerController;
