function userController(User) {
    function allMiddleware(req, res, next) {
      const query = { id: +req.params.userId };
      function findCallback(errorFindUsers, user) {
        if (errorFindUsers) {
          return res.send(errorFindUsers);
        }
        req.user = user;
        return next();
      }
      User.findOne(query, findCallback);
    }
  
    function getMethod(req, res) {
      res.json(req.user);
    }
  
    function postMethod(req, res) {
      const updatedUser = {
        ...req.user,
        ...req.body,
      };
  
      User.setUser(updatedUser);
  
      res.json(updatedUser);
    }
  
    function deleteMethod(req, res) {
      const id = +req.params.userId;
  
     User.deleteUser(id);
  
      res.json(user.getUsers());
    }
  
    return {
      getMethod, postMethod, deleteMethod, allMiddleware,
    };
  }
  
  module.exports = userController;
  