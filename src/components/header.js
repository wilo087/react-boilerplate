import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/componets/header.scss';

const Header = () => (
  <header>
    <div className="wcc-logo">Logo</div>
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="selected">Dashboard</NavLink>
        <NavLink to="/about-us" exact activeClassName="selected">About us</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
