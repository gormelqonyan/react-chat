import {combineReducers} from 'redux'

import {auth} from './auth'
import {chat} from './chat'

export const rootReducer = combineReducers({
    auth,
    chat
});