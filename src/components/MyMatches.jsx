import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LAWYER.png';

class MyMatches extends Component{
  render(){
    return(
      <div className="row">
        <div className="col s12 m6">
          <ul className="collection">
      <li className="collection-item avatar">
        <img src={Logo} alt="" className="circle responsive-image"/>
        <span className="title"><strong>Lawyer</strong></span>
        <p>Lorem ipsum Lorem ipsum</p>
        <a href="/careerdetails" className="secondary-content"><i className="material-icons small">dehaze</i></a>
      </li>

      <li className="collection-item avatar">
        <img src={Logo} alt="" className="circle responsive-image"/>
        <span className="title"><strong>Lawyer</strong></span>
        <p>Lorem ipsum Lorem ipsum</p>
        <a href="#!" className="secondary-content"><i className="material-icons small">dehaze</i></a>
      </li>

      <li className="collection-item avatar">
        <img src={Logo} alt="" className="circle responsive-image"/>
        <span className="title"><strong>Lawyer</strong></span>
        <p>Lorem ipsum Lorem ipsum</p>
        <a href="#!" className="secondary-content"><i className="material-icons small">dehaze</i></a>
      </li>

      <li className="collection-item avatar">
        <img src={Logo} alt="" className="circle responsive-image"/>
        <span className="title"><strong>Lawyer</strong></span>
        <p>Lorem ipsum Lorem ipsum</p>
        <a href="#!" className="secondary-content"><i className="material-icons small">dehaze</i></a>
      </li>

    </ul>
        </div>

      </div>
    )
  }
}

export default MyMatches;
