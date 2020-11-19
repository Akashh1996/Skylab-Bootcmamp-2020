function usersController(User, Adress, Country) {
  function getUsersMethod(req, res) {
    const query = {};
    User.find(query)
      .populate({
        path: 'address',
        populate: {
          path: 'country',
          model: Country,
        },
      })
      .exec((errorFind, user) => (
        errorFind
          ? res.send(errorFind)
          : res.json(user)));
  }

  return {
    getUsersMethod,
  };
}

module.exports = usersController;
