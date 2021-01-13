/* eslint-disable no-shadow */
function usersController(user) {
  function getMethod(req, res) {
    const { userId } = req.params;
    user.findById(userId, (errorFindUser, userData) => (errorFindUser
      ? res.send(errorFindUser)
      : res.send(userData)));
  }
  function putMethod({ body }, res) {
    const { email } = body.user;

    user.findOne({ email }, (errorPutUser, userFound) => {
      if (userFound) {
        return res.json(userFound);
      }

      const newUser = {
        userName: body.user.displayName, email: body.user.email, userPhotos: [body.user.photoURL],
      };
      user.create(newUser, (createError, createdUser) => {
        if (createError) {
          return res.send('error creating user');
        }

        return res.json(createdUser);
      });
    });
  }
  return { getMethod, putMethod };
}

module.exports = usersController;
