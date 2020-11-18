import React from 'react'; 
import { Nav, NavLink, NavItem, NavbarBrand } from 'reactstrap'
import logo from '../assets/logo.png'
import {useHistory} from 'react-router-dom'
import Dashboard from './Dashboard';


const Navigation = () => {
  const id = localStorage.getItem('user')
    return (
        <div>
            <Nav>
            <div className="sidebar-sticky" id="sidebar">
            <NavbarBrand><img src={logo} id='nav-logo'/></NavbarBrand>
            <ul className="nav flex-column" >
                <NavItem>
                   <NavLink className="nav-menu" href={`/user/${id}`}>Account Home</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Current Spreads</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/addNewEvent'>Create a Spread</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Edit Account</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Log Out</NavLink> 
                </NavItem>
                
                </ul>
            </div>

            </Nav>
            
        </div>
      );
}
 
export default Navigation;