import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/path18-logo-md.png';

class LandingPage extends Component {



  render(){
    return(
      <div className="row">
        <div className="col s12 m6">
          <img src={Logo} className="logo" alt="logo"></img>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/><br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            <br/><br/>
            printer took a galley of type and scrambled it to make a type specimen book.bop.</h5>
        </div>
        <div className="center-btn">
          <a href="/swipecard" className="waves-effect waves-light btn btn-large">Get Started</a>
        </div>
      </div>

    )
  }
}

export default LandingPage;
