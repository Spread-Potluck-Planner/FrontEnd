import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import EventCard from './EventCard'
import { useDispatch, useSelector } from 'react-redux'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { FETCH_USER_SUCCESS } from '../actions/userActions'
import '../App.css'


const defaultUser = { 
    user_id: 0, 
    username: "default user", 
    full_name: "", 
    email: "", 
    events: [ {
        "event_id": 137,
        "attending": true,
        "organizer_id": 1,
        "event_name": "My First Potluck",
        "date": "2021-01-31T00:00:00.000Z",
        "time": "11:00:00",
        "description": "Garth brooks sup alta vista tootsie pop, neon colors braveheart generation Y khaki fluorescent oregon trail. Butterfly clips cable modem slacker .",
        "address": "123 street",
        "city": "dallas",
        "state": "Texas"
      }]
}


const Dashboard = () => {
    const[userData,setUserData] = useState(defaultUser)
    const id = localStorage.getItem('user')
    const dispatch = useDispatch()
    const initialUserState = useSelector(state => state)

    useEffect(() => { 
        axiosWithAuth()
        .get(`https://potluck-planner-bw.herokuapp.com/users/${id}`)
        .then((response) => { 
            dispatch({type:FETCH_USER_SUCCESS, payload: response.data})
            setUserData(response.data)
            
        })
        .catch((error) => { 
            console.log("There was an error retreving the data from the server", error)
        })
    },[])


    return (
        <div className='dashboard'>
            <Navigation />
            {console.log('User State',initialUserState)}
          <div className='dashboard-cards'>
          <h2>Welcome Back {userData.username}</h2>
            {userData.events.map((event) => { 
                return <EventCard event={event} key={event.event_id}/>
            })}
         </div>
        </div>
      );
}
 
export default Dashboard;