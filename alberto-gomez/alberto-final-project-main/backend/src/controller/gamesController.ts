import { Request, Response } from 'express'
export {}

function gamesController (Game: any) {
  function getMethod (req: Request, res: Response) {
    const query = {}

    Game.find(query, (error, games) => {
      error ? res.send(error) : res.json(games)
    })
  }

  function patchMethod (req: Request, res: Response) {
    console.log(req)
    const query = req.params.gameId
    const body = req.body

    Game.findByIdAndUpdate(query, body, { new: true, useFindAndModify: false }, (error, game) => {
      error ? res.send(error) : res.json(game)
    })
  }
  return { getMethod, patchMethod }
}

module.exports = gamesController
