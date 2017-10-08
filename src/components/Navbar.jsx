import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="light-blue darken-3">
    <div className="nav-wrapper">
      <a href="/swipecard" className="brand-logo center">Path18</a>
      <ul id="nav-mobile" className="right">
        <li><Link to="/information"><i className="fa fa-info-circle fa-2x" aria-hidden="true"></i></Link></li>
      </ul>
      <ul id="nav-mobile" className="left">
        <li><Link to="/mymatches"><i className="fa fa-bars fa-2x" aria-hidden="true"></i></Link></li>
      </ul>
    </div>
  </nav>
      </div>
    )
  }
}

export default Navbar;
