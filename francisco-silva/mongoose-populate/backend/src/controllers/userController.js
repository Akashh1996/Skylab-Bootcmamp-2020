function userController(User, Country) {
  function getMethod(req, res) {
    const query = {};
    const user = User.find(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
        model: Country,
      },
    });
    user.exec((errorGetUser, foundUser) => {
      if (errorGetUser) {
        return res.send(errorGetUser);
      }
      return res.json(foundUser);
    });
  }

  function getIdMethod(req, res) {
    const query = req.params.id;
    const user = User.findOne(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
        model: Country,
      },
    });
    user.exec((errorGetUser, foundUser) => {
      if (errorGetUser) {
        return res.send(errorGetUser);
      }
      return res.json(foundUser);
    });
  }

  function putMethod(req, res) {
    console.log(req.body);
    const query = req.body;
    User.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        res.send(errorPutUser);
      }
      res.json(user);
    });
  }

  function deleteMethod(req, res) {
    const query = req.params.id;
    User.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  }

  function postMethod(req, res) {
    const query = req.params.id;
    User.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  }
  return {
    getMethod, getIdMethod, putMethod, deleteMethod, postMethod,
  };
}

module.exports = userController;
