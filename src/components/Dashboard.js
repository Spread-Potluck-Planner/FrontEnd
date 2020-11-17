import {useEffect, useState} from 'react'
import Navigation from './Navigation'
import EventCard from './EventCard'
import { useDispatch} from 'react-redux'
import {Button} from 'reactstrap'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { FETCH_USER_SUCCESS } from '../actions/userActions'
import emptyEvents from '../assets/sad.png'
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
        <div style={{marginTop: '100px'}}>
            <img src={emptyEvents} style={{width: "30%", marginBottom: '20px'}} />
            <h4>Opps... looks like you don't have any upcoming events.</h4>
            <p style={{fontWeight: 'bold', fontSize:'18px'}}>Create one now</p>
            <Button color='primary'>New Spread</Button>
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