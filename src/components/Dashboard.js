import {useEffect, useState} from 'react'


import EventCard from './EventCard'


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
      }, {
        "event_id": 138,
        "attending": true,
        "organizer_id": 1,
        "event_name": "Someone's Birthday",
        "date": "2021-01-31T00:00:00.000Z",
        "time": "11:00:00",
        "description": "Doc martens dj jazzy jeff jurassic park sideburns fresh prince of bel-air. Full house nerf guns deep blue free willy, harrison ford george michael i'm king of the world big lebowski. ",
        "address": "123 street",
        "city": "Portland",
        "state": "Oregon"
      }, 
      {
        "event_id": 139,
        "attending": true,
        "organizer_id": 1,
        "event_name": "Freaky Friday Halloween work Potluck",
        "date": "2021-01-31T00:00:00.000Z",
        "time": "11:00:00",
        "description": "Frasier fanny packs des’ree did I do that. Pearl jam hook leggings sonic the hedgehog bomber jacket dawson’s creek this is your brain on drugs. Tae bo headbands ",
        "address": "123 street",
        "city": "Somewhere ",
        "state": "CA"
      }]
}


const Dashboard = () => {
    const[userData,setUserData] = useState(defaultUser)

    useEffect(() => { 
        //getuserData
    }, [])


    return (
        <div className='dashboard'>
            <h2>Welcome Back {userData.username}</h2>
          <div className='dashboard-cards'>
            {userData.events.map((event) => { 
                return <EventCard event={event} key={event.event_id}/>
            })}
         </div>
        </div>
      );
}
 
export default Dashboard;