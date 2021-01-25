import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './Navbarelements'

function Navbar({toggle}) {
    return (
        <div>
         <Nav>
             <NavLink to='/'> Tomato Pizzas </NavLink>
             <NavIcon onClick={toggle}> 
             <p> Menu</p>
             <Bars />
             </NavIcon>
         </Nav>
        </div>
    )
}

export default Navbar;
