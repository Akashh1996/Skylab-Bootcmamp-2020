/* eslint-disable no-console */
interface UserFunctions {
  getMethod: Function,
  postMethod: Function,
  putMethod: Function,
  deleteMethod: Function,
}

function UserController (Users):UserFunctions {
  function getMethod (req, res) {
    const { query } = req
    Users.findOne(query)
      .populate({ path: 'favorites' })
      .exec((errorFindUser, User) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(User)))
  }

  function postMethod (req, res) {
    const { newUser } = req.body
    Users.create(newUser, (errorNewUser, correctNewUser) => (errorNewUser
      ? res.send(errorNewUser)
      : res.json(correctNewUser)))
  }

  function putMethod (req, res) {
    const { user: { _id, favorites }, establishmentId } = req.body
    Users.findByIdAndUpdate(_id, {
      favorites: [establishmentId, ...favorites]
    }, { new: true })
      .populate({ path: 'favorites' })
      .exec((errorNewFavorite, newFavorite) => (errorNewFavorite
        ? res.send(errorNewFavorite)
        : res.json(newFavorite)))
  }

  function deleteMethod (req, res) {
    const { user: { _id, favorites }, establishmentId } = req.body
    Users.findByIdAndUpdate(_id, {
      favorites: favorites.filter(
        (establishment) => establishment._id.toString() !== establishmentId
      )
    }, { new: true })
      .populate({ path: 'favorites' })
      .exec((errorDeleteFavorite, deleteTheFavorite) => (errorDeleteFavorite
        ? res.send(errorDeleteFavorite)
        : res.json(deleteTheFavorite)))
  }

  return {
    getMethod, postMethod, putMethod, deleteMethod
  }
}

module.exports = UserController
