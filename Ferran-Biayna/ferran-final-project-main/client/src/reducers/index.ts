import { combineReducers } from 'redux'
import promotionsReducer from './promotionsReducer'
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  promotionsReducer,
  userReducer,
  locationReducer,
  authReducer
})

export default rootReducer
