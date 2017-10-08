import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Information from './Information';
import MyMatches from './MyMatches';
import SwipeCard from './SwipeCard';
import CareerDetails from './CareerDetails';


const Main = () => (
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/information' component={Information}/>
      <Route exact path='/mymatches' component={MyMatches}/>
      <Route exact path='/swipecard' component={SwipeCard}/>
      <Route exact path='/careerdetails' component={CareerDetails}/>
    </Switch>
)

export default Main;
