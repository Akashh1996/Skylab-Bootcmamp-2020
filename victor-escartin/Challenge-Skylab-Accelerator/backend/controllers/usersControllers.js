function usersController(User) {
    function getMethod(req, res) {
      const query = {};
      User.find(query)
        .exec((errorFindUsers, users) => ((errorFindUsers)
          ? res.send(errorFindUsers)
          : res.json(users)));
    }
  
    function putMethod(req, res) {
      const query = req.body;
      User.create(query)
        .exec((errorFindUsers, users) => ((errorFindUsers)
          ? res.send(errorFindUsers)
          : res.json(users)));
    }
  
    return {
      getMethod, putMethod,
    };
  }
  
  module.exports = usersController;