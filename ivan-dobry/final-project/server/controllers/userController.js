/* eslint-disable no-param-reassign */
function userController(user) {
  function getMethod(req, res) {
    const query = { displayName: req.query.displayName };
    user.findOne(query).populate('favourite').exec((errorFindUser, userFind) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userFind)
    ));
  }

  function putMethod({ body }, res) {
    const query = { uid: body.uid };
    user.findOneAndUpdate(query, body, {
      upsert: true, useFindAndModify: false,
    }, (errorFindUser, userModified) => (
      errorFindUser
        ? res.send(errorFindUser)
        : res.json(userModified)
    ));
  }

  function postMethod({ body }, res) {
    const userId = body.uid;
    user.findOne({ uid: userId }, (errorFindUser, userFound) => {
      if (userFound) {
        const findPet = userFound.favourite.some(
          (pet) => String(pet) === body.pet,
        );

        if (findPet) {
          const petFilter = userFound.favourite.filter((pet) => String(pet) !== body.pet);
          userFound.favourite = petFilter;
          userFound.save();
          res.send(userFound);
        } else {
          userFound.favourite = [...userFound.favourite, body.pet];
          userFound.save();
          res.json(userFound);
        }
      } else {
        res.send(errorFindUser);
      }
    });
  }

  return {
    getMethod, putMethod, postMethod,
  };
}

module.exports = userController;
