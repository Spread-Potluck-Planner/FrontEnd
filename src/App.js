import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Organizer_Home from './components/Organizer_Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
    <div className="App">
    <h1 style={{textAlign: 'center'}}>Potluck Planner</h1>
      <header className="App-header">
        
        <Link to='/register'/>
      </header>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <PrivateRoute exact path='/user/:id' component={Dashboard} />
    </div>
    </Router>
  );
}

export default App;
