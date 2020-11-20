import { combineReducers } from 'redux';
import agendaReducer from '../reducers/agendaReducer';

const rootReducer = combineReducers({ agendaReducer });

export default rootReducer;
