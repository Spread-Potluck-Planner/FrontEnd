import { 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAIL
} from '../actions/userActions'

const initialState = { 
    user_id: 0, 
    username: "", 
    full_name: "", 
    email: "", 
    events: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_SUCCESS:
            return { 
                ...state, 
                user_id: action.payload.user_id, 
                username: action.payload.username, 
                full_name: action.payload.full_name, 
                email: action.payload.email, 
                events: action.payload.events
            }
        default: 
            return state
    }
}