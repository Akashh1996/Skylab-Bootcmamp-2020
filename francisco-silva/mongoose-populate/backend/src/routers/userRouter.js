const { Router } = require('express');
const countryModel = require('../models/countryModel');

function userRouter(User) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    User.find(query).populate({
      path: 'address',
      populate: {
        path: 'country',
        model: countryModel,
      },
    }).exec((errorGetUser, foundUser) => {
      if (errorGetUser) {
        res.send(errorGetUser);
      }
      res.send(foundUser);
    });
  });
  router.put('/', (req, res) => {
    const query = req.body;
    User.create(query, (errorPutUser, user) => {
      if (errorPutUser) {
        res.send(errorPutUser);
      }
      res.json(user);
    });
  });

  router.delete('/:id', (req, res) => {
    const query = req.params.id;
    User.findByIdAndRemove(query, (errorDelete) => (
      errorDelete ? res.send(errorDelete) : res.send('deleted')
    ));
  });
  router.post('/:id', (req, res) => {
    const query = req.params.id;
    User.findByIdAndUpdate(query, (errorUpdate, address) => (
      errorUpdate ? res.send(errorUpdate) : res.send(address)
    ));
  });
  return router;
}
module.exports = userRouter;
