const { Router } = require('express');
const countryModel = require('../models/countryModel');

function userRouter(User) {
  const router = Router();
  router.get('/', (req, res) => {
    const query = {};
    User.find(query)
      .populate({
        path: 'address',
        populate: {
          path: 'country',
          model: countryModel,
        },
      })
      .exec((errorCreate, users) => {
        if (errorCreate) {
          res.send(errorCreate);
        }
        res.json(users);
      });
  });

  router.put('/', (req, res) => {
    const user = new User(req.body);
    user.save((error, userSaved) => (error ? res.send(error) : res.json(userSaved)));
  });
  return router;
}
module.exports = userRouter;
