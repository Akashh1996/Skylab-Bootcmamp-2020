import { combineReducers } from 'redux'
import gameReducer from './gameReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({ gameReducer, userReducer })

export default rootReducer
