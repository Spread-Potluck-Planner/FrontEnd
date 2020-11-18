import { combineReducers } from 'redux';
import { userReducer as userState } from './userReducer';
import { eventReducer as eventState } from './userReducer';
// import {guestsReducer as guestsState} from './userReducer'
import { loginReducer as loginState } from './loginReducer';

export const rootReducer = combineReducers({
    userState,
    loginState,
    eventState,
    // guestsState
})