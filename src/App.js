import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Organizer_Home from './components/Organizer_Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Potluck Planner</h1>
        <Link to='/register'/>
      </header>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute exact path='/home_page' component={Organizer_Home} />
    </div>
    </Router>
  );
}

export default App;
