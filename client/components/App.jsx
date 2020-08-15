import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

// import components
import Header from './Header';

const App = props => {
  [isLoggedIn, setIsLoggedIn] = useState('false');


  return (
    <Header />
    <Switch>
      <Route path='/' >
          <Search />
      </Route>
      <Route path='/results' isLoggedIn={isLoggedIn}>
          <Results />
      </Route>
      <Route path='/profile'>
          <Profile />
      </Route>
    </Switch>
  )
}