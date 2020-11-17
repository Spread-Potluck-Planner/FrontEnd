import { combineReducers } from 'redux';
import { userReducer as userState } from './userReducer';
import { loginReducer as loginState } from './loginReducer';

export const rootReducer = combineReducers({
    userState,
    loginState
})