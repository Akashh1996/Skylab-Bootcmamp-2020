export {}
const { Router } = require('express')
const userController = require('../controller/userController.ts')

function userRouter (User: any) {
  const router = Router()

  const user = userController(User)

  router.route('/:userId')
    .get(user.getMethod)
    .patch(user.patchMethod)

  router.route('/favourites/:userId')
    .patch(user.addToFavourites)

  router.route('/deletefromfavourites/:userId')
    .patch(user.deleteMethod)

  router.route('/')
    .post(user.postMethod)

  return router
}

module.exports = userRouter
