const { Router } = require('express');

function userRouter(userSchema, addressSchema, countrySchema) {
  const router = Router();

  router.route('/')
    .get((req, res) => {
      const query = {};
      const getCallback = (error, users) => (error ? res.send(error) : res.send(users));
      userSchema.find(query)
        .populate({
          path: 'address',
          populate: { path: 'country' },
        })
        .exec(getCallback);
    })
    .post((req, res) => {
      const userToCreate = req.body;
      const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
      userSchema.create(userToCreate, postCallback);
    });

  router.route('/addresses')
    .get((req, res) => {
      const query = {};
      const getCallback = (error, addresses) => (error ? res.send(error) : res.send(addresses));
      addressSchema.find(query)
        .populate('country')
        .exec(getCallback);
    })
    .post((req, res) => {
      const addressToCreate = req.body;
      const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
      addressSchema.create(addressToCreate, postCallback);
    });

  router.route('/countries')
    .get((req, res) => {
      const query = {};
      const getCallback = (error, countries) => (error ? res.send(error) : res.send(countries));
      countrySchema.find(query)
        .populate('address')
        .exec(getCallback);
    })
    .post((req, res) => {
      const countryToCreate = req.body;
      const postCallback = (error, created) => (error ? res.send(error) : res.send(created));
      countrySchema.create(countryToCreate, postCallback);
    });

  return router;
}

module.exports = userRouter;
