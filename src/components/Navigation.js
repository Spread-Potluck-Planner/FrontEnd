import React from 'react'; 
import { Nav, NavLink, NavItem, NavbarBrand } from 'reactstrap'
import logo from '../assets/logo.png'


const Navigation = () => {
    return (
        <div>
            <Nav>
            <div className="sidebar-sticky" id="sidebar">
            <NavbarBrand><img src={logo} id='nav-logo'/></NavbarBrand>
            <ul className="nav flex-column" >
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Account Home</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Current Spreads</NavLink> 
                </NavItem>
                <NavItem>
                   <NavLink className="nav-menu" href='/'>Create a Spread</NavLink> 
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