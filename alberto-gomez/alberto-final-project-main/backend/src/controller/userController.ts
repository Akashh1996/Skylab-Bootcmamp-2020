import { Request, Response } from 'express'
export {}

function userController (User: any) {
  function getMethod (req: Request, res: Response) {
    const { userId } = req.params
    const query = { id: userId }

    User.findOne(query).populate('favourites').exec((error: any, currentUser: any) => {
      error ? res.send(error) : res.json(currentUser)
    })
  }

  function patchMethod (req: Request, res: Response) {
    const query = req.params.userId
    const body = req.body

    User.findByIdAndUpdate(query, body, { new: true }).populate('favourites').populate('events').exec(
      (error, user) => {
        error ? res.send(error) : res.json(user)
      }
    )
  }

  function deleteMethod (req: Request, res: Response) {
    console.log(req)
    const query = req.params.userId
    const body = req.body

    User.findByIdAndUpdate(query, body, { new: true, useFindAndModify: false }).populate('favourites').populate('events').exec(
      (error, user) => {
        error ? res.send(error) : res.json(user)
      }
    )
  }

  function postMethod (req: Request, res: Response) {
    const query = { id: req.body.id }

    User.findOneAndUpdate(query, req.body, { upsert: true, useFindAndModify: false }, (error: any, newUser: any) => {
      error ? res.send(error) : res.json(newUser)
    })
  }

  async function addToFavourites (req: Request, res: Response) {
    try {
      const query = { id: req.params.userId }
      const favourites = req.body.favourites
      const gameIds = favourites.map(game => {
        return game._id
      })

      const updatedUser = await User.findOneAndUpdate(query, { favourites: gameIds }, { new: true }).populate('favourites')
      res.status(200)
      return res.json(updatedUser)
    } catch (error) {
      res.status(409)
      return res.send(error)
    }
  }

  return { getMethod, patchMethod, deleteMethod, postMethod, addToFavourites }
}

module.exports = userController
