import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/componets/header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="wcc-logo">Wilowayne De La Cruz</div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">Dashboard</NavLink>
            <NavLink to="/about-us" exact activeClassName="selected">About us</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
