import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Information extends Component {



  render() {
    return(

      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Step 1</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>

          </div>
        </div>

        <div className="col s12 m6">
          <div className="card green darken-1">
            <div className="card-content white-text">
              <span className="card-title">Step 2</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>

          </div>
        </div>

        <div className="col s12 m6">
          <div className="card orange darken-1">
            <div className="card-content white-text">
              <span className="card-title">Step 3</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
        <div className="center-btn">
          <a href="/swipecard" className="waves-effect waves-light btn btn-large">Get Started</a>
        </div>

      </div>
    )
  }
}

export default Information;
