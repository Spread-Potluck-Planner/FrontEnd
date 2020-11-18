import { 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAIL,
} from '../actions/userActions'
import {
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
    // FETCH_GUESTS_SUCCESS,
    // FETCH_GUESTS_FAILURE
} from '../utils/reduxVariables'

const initialUserState = { 
    user_id: 0, 
    username: "", 
    full_name: "", 
    email: "", 
    events: []
}

const initialEventState = {
    event_id: '',
    organizer_id: '',
    event_name: '',
    date: '',
    time: '',
    description: '',
    address: '',
    city: '',
    state: '',
    guests: [],
    recipes: []
}

// const initialGuestsState = {
//     recipe_name: '',
//     user_id: '',
//     full_name: ''
// }

export const userReducer = (state = initialUserState, action) => {
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

export const eventReducer = (state = initialEventState, action) => {
    switch(action.type){
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                event_id: action.payload.event_id,
                organizer_id: action.payload.organizer_id,
                event_name: action.payload.event_name,
                date: action.payload.date,
                time: action.payload.time,
                description: action.payload.description,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                guests: action.payload.guests,
                recipes: action.payload.recipe
            }
        case FETCH_EVENT_FAILURE:
            return null
        default:
            return state
    }
}

// export const guestsReducer = (state = initialGuestsState, action) => {
//     switch(action.type){
//         case FETCH_GUESTS_SUCCESS:
//             return {
//                 ...state,
//                 recipe_name: action.payload.recipe_name,
//                 user_id: action.payload.user_id,
//                 full_name: action.payload.full_name
//             }
//         case FETCH_GUESTS_FAILURE:
//             return null
//         default:
//             return state
//     }
// }