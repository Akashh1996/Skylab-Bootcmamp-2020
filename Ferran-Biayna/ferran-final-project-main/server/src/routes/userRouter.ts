export {}
const { Router } = require('express')
const UserController = require('../controllers/UserController')

function userRouter (usersModel) {
  const router = Router()
  const user = UserController(usersModel)

  router.route('/')
    .get(user.getMethod)
    .post(user.postMethod)
    .put(user.putMethod)
    .delete(user.deleteMethod)

  return router
}

module.exports = userRouter
