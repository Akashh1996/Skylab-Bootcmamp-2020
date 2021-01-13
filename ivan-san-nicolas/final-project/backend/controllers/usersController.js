function usersController(User) {
  function getMethod(req, res) {
    const { userName } = req.query;
    const query = { userName };
    const callback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };

    User.find(query)
      .populate('characters')
      .exec(callback);
  }
  return {
    getMethod,
  };
}

module.exports = usersController;
