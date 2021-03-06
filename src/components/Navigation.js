import React from 'react'; 
import { Nav,NavLink, NavItem, NavbarBrand } from 'reactstrap'
import logo from '../assets/logo.png'
import {useHistory, Link} from 'react-router-dom'
import Dashboard from './Dashboard';


const Navigation = () => {
  const id = localStorage.getItem('user')
  const logOut = () => { 
   localStorage.removeItem('token')
   localStorage.removeItem('user')
  }
    return (
        <div>
            <Nav>
            <div className="sidebar-sticky" id="sidebar">
            <NavbarBrand><img src={logo} id='nav-logo'/></NavbarBrand>
            <ul className="nav flex-column" >
                <NavItem>
                   <NavLink className="nav-menu" tag={Link} to={`/user/${id}`}>Account Home</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu"  tag={Link} to={`/user/${id}`}>Current Spreads</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" tag={Link} to={`/user/${id}/add-event`}>Create a Spread</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" tag={Link}  to={`/user/${id}/edit`}>Edit Account</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" onClick={() => logOut()} href='/'>Log Out</NavLink> 
                </NavItem>
                
                </ul>
            </div>

            </Nav>
            
        </div>
      );
}
 
export default Navigation;