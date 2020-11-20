const countryModel = require('../models/countryModel');
const addressModel = require('../models/addressModel');

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

  async function putMethod(req, res) {
    const { address, ...restInfo } = req.body;
    console.log(req.body);
    try {
      const newCountry = await countryModel.create(address.country);
      // eslint-disable-next-line no-underscore-dangle
      const newAddress = await addressModel.create({ ...address, country: newCountry._id });
      // eslint-disable-next-line no-underscore-dangle
      const newUser = await User.create({ ...restInfo, address: newAddress._id });

      res.json(newUser);
    } catch (error) {
      res.send(error);
    }
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
