/* eslint-disable no-unused-expressions */
function usersController(Users) {
  function getMethod(req, res) {
    const query = {};

    Users.find(query, (errorFindingUsers, users) => {
      errorFindingUsers ? res.send(errorFindingUsers) : res.json(users);
    });
  }

  return {
    getMethod,
  };
}

module.exports = usersController;
