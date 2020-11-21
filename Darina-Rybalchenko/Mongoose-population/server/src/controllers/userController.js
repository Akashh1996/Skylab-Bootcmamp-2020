function userController(User, Address, Country) {
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
    user.exec((errorCreate, users) => {
      if (errorCreate) {
        res.send(errorCreate);
      }
      res.json(users);
    });
  }
  async function putMethod(req, res) {
    const { address, ...infoUser } = req.body;
    try {
      const countryCreated = await Country.create(address.country);
      const addressCreated = await Address.create(
        { ...address, country: countryCreated._id },
      );
      const userCreateResponse = await User.create(
        { ...infoUser, address: addressCreated._id },
      );
      res.json(userCreateResponse);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod, putMethod };
}

module.exports = userController;
