import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LAWYER.png';
import Technion from '../img/Technion_logo.jpg';
import BenGurion from '../img/Ben-Gurion.png';
import TelAviv from '../img/telaviv.png';

class CareerDetails extends Component {


  render(){
    return(
      <div className="card">
    <div className="card-content">
      <a href="javascript:history.go(-1)"><i  className="fa fa-times-circle fa-2x" aria-hidden="true"></i></a>

      <img src={Logo} className="logo-details"></img>

      <p>A lawyer (also called an "advocate", "attorney", "barrister", "counsel", "counsellor", or "solicitor") is someone who practices law. A lawyer has earned a degree in law, and has a license to practice law in a particular area. If people have any problem regarding the law, they can contact a lawyer for advice.</p>
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a className="active" href="#test4">Grades</a></li>
        <li className="tab"><a href="#test5">Salary</a></li>
        <li className="tab"><a href="#test6">Universities</a></li>
      </ul>
    </div>
    <div className="card-content grey lighten-4">
      <div id="test4">
        <ul className="collection with-header">
        <li className="collection-header"><h4>Grades Required</h4></li>
        <li className="collection-item">Bagrut score: 56329379</li>
        <li className="collection-item">Psychometry: 7223</li>
      </ul>
      </div>
      <div id="test5">
        <ul className="collection with-header">
        <li className="collection-header"><h4>Salary Info</h4></li>
        <li className="collection-item">Starting salary: $</li>
        <li className="collection-item">Average salary: $$</li>
        <li className="collection-item">Senior salary: $$$</li>
      </ul>
      </div>
      <div id="test6">
        <ul className="collection">

    <li className="collection-item avatar">
      <img src={Technion} alt="" className="circle" />
      <span className="title"><strong>Technion IIT</strong></span>
      <p>Lorem ipsum</p>

      <a href="https://www.technion.ac.il/en/" className="secondary-content"><i className="material-icons" href="https://www.technion.ac.il/en/">send</i></a>
    </li>

    <li className="collection-item avatar">
      <img src={BenGurion} alt="" className="circle" />
      <span className="title"><strong>Ben Gurion</strong></span>
      <p>Lorem ipsum</p>

      <a href="http://in.bgu.ac.il/en/Pages/default.aspx" className="secondary-content"><i className="material-icons" href="http://in.bgu.ac.il/en/Pages/default.aspx">send</i></a>
    </li>

    <li className="collection-item avatar">
      <img src={TelAviv} alt="" className="circle" />
      <span className="title"><strong>Tel Aviv University</strong></span>
      <p>Lorem ipsum</p>

      <a href="https://english.tau.ac.il/" className="secondary-content"><i className="material-icons" href="https://english.tau.ac.il/">send</i></a>
    </li>
  </ul>
      </div>
    </div>
  </div>
    )
  }
}

export default CareerDetails;
