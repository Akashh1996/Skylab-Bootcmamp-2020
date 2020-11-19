function userIdController(UserId) {
  function getMethod(req, res) {
    const query = req.params.id;
    UserId.find(query, (errorFindUserId, userId) => {
      if (errorFindUserId) {
        return res.send(errorFindUserId);
      }
      return res.json(userId);
    });
  }

  return {
    getMethod,
  };
}

module.exports = userIdController;
