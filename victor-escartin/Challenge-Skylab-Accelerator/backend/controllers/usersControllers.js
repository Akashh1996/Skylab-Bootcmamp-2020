function usersController(User) {
    function getMethod(req, res) {
      const query = {};
      User.find(query)
        .exec((errorFindUsers, users) => ((errorFindUsers)
          ? res.send(errorFindUsers)
          : res.json(users)));
    }
 
    function putMethod(req, res) {
      const user = new User(req.body);
  
      user.save((error, userSaved) => (error ? res.send(error) : res.json(userSaved)));
    }
  
    return {
      getMethod, putMethod,
    };
  }
  
  module.exports = usersController;