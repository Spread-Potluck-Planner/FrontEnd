import axios from 'axios';


export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';


export const getUser = (user_id) => dispatch => { 
    dispatch({type: FETCH_USER_START})
        axios.get(`https://potluck-planner-bw.herokuapp.com/users/${user_id}`)
        .then((response) => { 
            console.log("Res",response.data)
            //dispatch({type:FETCH_USER_SUCCESS, payload: response.data})
        })
        .catch((error) => { 
            console.log("There was an error retreving the data from the server", error)
        })
}