import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import ErrorPage from '../pages/404'
import Home from './App';
import Signup from '../pages/register';

const Main = () => {
  return (
      <Router>
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/register' component={Signup}></Route>
      <Route component={ErrorPage}></Route>
      
    </Switch>
    </Router>
  );
}

export default Main;