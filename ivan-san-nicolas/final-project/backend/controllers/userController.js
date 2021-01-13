function userController(User) {
  function getMethod(req, res) {
    const { userId } = req.query;
    const query = { _id: userId };
    const callback = (error, payload) => {
      error ? res.send(error) : res.json(payload);
    };

    User.findOne(query)
      .populate('characters')
      .exec(callback);
  }

  function patchMethod(req, res) {
    const { userId, updatedUser } = req.body;
    const query = { _id: userId };

    User.findOneAndUpdate(query, updatedUser, { new: true }, (error, user) => {
      error ? res.send(error) : res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const userKey = req.query['0'];

    const query = { uniqueKey: userKey };

    User.findOneAndDelete(query, (error, deletedUser) => {
      error ? res.send(error) : res.json(deletedUser);
    });
  }

  async function postMethod(req, res) {
    try {
      const user = req.body;
      const query = { email: user.email };
      const userExists = await User.findOne(query);

      if (userExists) {
        res.send(userExists);
      } else {
        const newUser = {
          email: user.email,
          userName: user.name,
          profilePic: user.photoUrl,
          favouriteGames: [],
          languages: [],
          country: 'Spain',
        };
        const createdUser = await User.create(newUser);
        res.send(createdUser);
      }
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getMethod,
    patchMethod,
    deleteMethod,
    postMethod,
  };
}

module.exports = userController;
