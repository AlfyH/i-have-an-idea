//this will contain the React router
import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Submit from './pages/Submit'
import Events from './pages/Events'
import Community from './pages/Community'
import Login from './pages/Login'



const AppRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Header />
      <Route exact path="/"  component={Home}/>
      <Route exact path ="/explore" render = { () => <Explore title = 'Explore'/> }/>
      <Route exact path = "/submit" component ={Submit}/>
      <Route path = "/events" component = {Events}/>
      <Route path = "/community" component = {Community}/>
      <Route path='/login' component={Login}/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
