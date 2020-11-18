import {axiosWithAuth} from '../utils/axiosWithAuth'
import {FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE, 
    // FETCH_GUESTS_SUCCESS, FETCH_GUESTS_FAILURE
} from '../utils/reduxVariables'


export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchEvent = (id) => (dispatch) => {
    return axiosWithAuth()
        .get(`https://potluck-planner-bw.herokuapp.com/events/${id}`)
        .then(res => {
            dispatch({type:FETCH_EVENT_SUCCESS, payload:res.data})
        })
        .catch(err => {
            dispatch({type:FETCH_EVENT_FAILURE, payload: err})
        })
}

// export const fetchGuests = (id) => (dispatch) => {
//     axiosWithAuth()
//         .get(`https://potluck-planner-bw.herokuapp.com/events/${id}/recipes`)
//         .then(res => {
//             dispatch({type:FETCH_GUESTS_SUCCESS, payload:res.data})
//         })
//         .catch(err => {
//             dispatch({type:FETCH_GUESTS_FAILURE, payload: err})
//         })
// }