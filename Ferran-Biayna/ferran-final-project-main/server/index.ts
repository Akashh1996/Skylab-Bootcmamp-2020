import usersModel from './src/models/usersModel'
import promotionsModel from './src/models/promotionsModel'
import establishmentsModel from './src/models/establishmentsModel'
const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const dbMongoUrl = require('./src/utils/dbUrl')
const promotionsRouter = require('./src/routes/promotionsRouter')(establishmentsModel, promotionsModel)
const userRouter = require('./src/routes/userRouter')(usersModel)

const app = express()
app.use(cors())
const port = process.env.PORT || 5000
const dataBaseURL = dbMongoUrl()

mongoose.connect(dataBaseURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/user', userRouter)
app.use('/promotions', promotionsRouter)

app.listen(port, () => (
  debug(`Server is running on port ${chalk.blue(port)}`)))
