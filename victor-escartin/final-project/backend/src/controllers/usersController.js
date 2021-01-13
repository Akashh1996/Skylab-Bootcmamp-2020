/* eslint-disable no-shadow */
function usersController(userSchema) {
  function getUsersMethod(req, res) {
    const query = {};
    const getCallBack = (error, users) => (
      error ? res.send(error) : res.send(users)
    );
    userSchema.find(query, getCallBack);
  }

  function putUserMethod({ body }, res) {
    const query = { uid: body.uid };
    // eslint-disable-next-line max-len
    userSchema.findOneAndUpdate(query, body, { upsert: true, useFindAndModify: false }, (usersError, user) => {
      if (usersError) {
        return res.send(usersError);
      }
      return res.send(user);
    });
  }
  return { getUsersMethod, putUserMethod };
}

module.exports = usersController;
