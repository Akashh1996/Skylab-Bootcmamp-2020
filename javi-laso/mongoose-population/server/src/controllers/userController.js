function userController(userSchema, addressSchema, countrySchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallback = (error, users) => (error ? res.send(error) : res.send(users));
    userSchema.find(query)
      .populate({
        path: 'address',
        populate: { path: 'country' },
      })
      .exec(getCallback);
  }

  async function putUsersMethod(req, res) {
    try {
      const { address, ...user } = req.body;

      const createdCountryResponse = await countrySchema.create(address.country);

      const createdAddressResponse = await addressSchema.create(
        { ...address, country: createdCountryResponse._id },
      );

      const createdUserResponse = await userSchema.create(
        { ...user, address: createdAddressResponse._id },
      );

      res.send(createdUserResponse);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getUsersMethod,
    putUsersMethod,
  };
}

module.exports = userController;
