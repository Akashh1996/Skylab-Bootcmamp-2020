export {}
const { Router } = require('express')
const gamesController = require('../controller/gamesController.ts')

function gameRouter (Game: any) {
  const router = Router()
  const games = gamesController(Game)

  router.route('/')
    .get(games.getMethod)

  router.route('/:gameId')
    .patch(games.patchMethod)
  return router
}

module.exports = gameRouter
