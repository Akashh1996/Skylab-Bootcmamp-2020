export {}

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
const Game = require('./models/gameSchema.ts')
const gameRouter = require('./routes/gameRouter.ts')(Game)
const User = require('./models/userSchema')
const userRouter = require('./routes/userRouter')(User)

const app = express()
const port = process.env.PORT || 7777
const dbUrl = process.env.DBURL || 'mongodb://localhost/boardgamesdb'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(morgan('tiny'))

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/games', gameRouter)
app.use('/users', userRouter)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${chalk.blue(port)}`)
})
