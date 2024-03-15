import React from 'react'
import { NavLink, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css';

const NavItem = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path : resolvedPath.pathname, end : true });
  const isHome = useMatch({ path : '/', end : true });
  return (
    <li className={`nav-item ${isActive ? `active` : isHome ? to === '/calculator' ? `active` : `` : ``}`}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <NavItem to="/calculator">Calculator</NavItem>
          <NavItem to="/todoapp">To Do App</NavItem>
        </ul>
      </nav>
    </>
  )
}

export default Navbar