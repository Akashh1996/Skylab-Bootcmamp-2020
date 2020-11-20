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

  function putUsersMethod(req) {
    const { info } = req.body;
    const userInfo = {
      name: info.name,
      age: info.age,
    };
    const addressInfo = {
      street: info.street,
      number: info.number,
      city: info.city,
    };
    const countryInfo = {
      code: info.code,
      name: info['country-name'],
    };
    const addressCallback = (errorAddress, newAddress) => {
      userInfo.address = newAddress._id;
      userSchema.create(userInfo);
    };
    const countryCallback = (errorCountry, newCountry) => {
      addressInfo.country = newCountry._id;
      addressSchema.create(addressInfo, addressCallback);
    };

    countrySchema.create(countryInfo, countryCallback);
  }

  return {
    getUsersMethod,
    putUsersMethod,
  };
}

module.exports = userController;
