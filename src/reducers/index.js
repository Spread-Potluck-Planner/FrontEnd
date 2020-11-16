import { combineReducers } from 'redux';
import { organizersReducer as organizersState } from './organizersReducer';
import { loginReducer as loginState } from './loginReducer';

export const rootReducer = combineReducers({
    organizersState,
    loginState
})