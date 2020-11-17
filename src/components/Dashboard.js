import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import EventCard from './EventCard'
import { useDispatch} from 'react-redux'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { FETCH_USER_SUCCESS } from '../actions/userActions'
import '../App.css'


const defaultUser = { 
    user_id: 0, 
    username: "default user", 
    full_name: "", 
    email: "", 
    events: [ ]
}


const Dashboard = () => {
    const[userData,setUserData] = useState(defaultUser)
    const id = localStorage.getItem('user')
    const dispatch = useDispatch()

    const emptyMessage = "There are no events listed for this user"

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

    const showCards = () => { 
        if(userData.events != emptyMessage) { 
            return userData.events.map((event) => { 
                return <EventCard event={event} key={event.event_id}/> 
            })
    } else { 
        return (
        <div>
            Opps... looks like you don't have any upcoming events.
            <p>Create one now</p>
            <button>New Spread</button>
        </div>
        
        )
    }
    }

    return (
        <div className='dashboard'>
            <Navigation />
           
          <div className='dashboard-cards'>
          <h2>Welcome Back {userData.username}</h2>
          {showCards()}
          
         </div>
        </div>
      );
}
 
export default Dashboard;