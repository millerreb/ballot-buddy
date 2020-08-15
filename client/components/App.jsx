import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Header from './Header';
import Results from './Results';
import Profile from './Profile';
import Search from './Search';


const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');

  // TO-DO: we'll need some logic, probably in useEffect, to detect login and set state appropriately

  return (
    <React.Fragment>
      <Header />
        <Router>
        <Switch>
          <Route exact path='/' >
            <Search />
          </Route>
      {/* <Route path='/results' isLoggedIn={isLoggedIn}>
          <Results />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route> */}
      </Switch>
    </Router>
    </React.Fragment>
  )
};

export default App;