function userController(User, Address, Country) {
  function getMethod(req, res) {
    const query = {};
    const user = User.find(query);
    user.populate({
      path: 'address',
      populate: {
        path: 'country',
      },
    });
    user.exec((error, users) => {
      if (error) {
        res.send(error);
      }
      res.send(users);
    });
  }

  async function putMethod(req, res) {
    const { address, ...userInfo } = req.body;
    console.log(address.country);
    try {
      const createdCountryResponse = await Country.create(address.country);

      const createdAddressResponse = await Address.create(
        { ...address, country: createdCountryResponse._id },
      );

      const createdUserResponse = await User.create(
        { ...userInfo, address: createdAddressResponse._id },
      );

      res.json(createdUserResponse);
    } catch (error) {
      res.send(error);
    }
  }

  return { getMethod, putMethod };
}

module.exports = userController;
