import { 
    FETCH_USER_START,
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAIL
} from '../actions/userActions'

const initialState = { 
    isLoading: false,
    user_id: 0, 
    username: "", 
    full_name: "", 
    email: "", 
    events: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_START: 
            return { 
                ...state, 
                isLoading: true,
            }

        case FETCH_USER_SUCCESS:
            return { 
                ...state, 
                isLoading: false,
                

            }
        default: 
            return state
    }
}