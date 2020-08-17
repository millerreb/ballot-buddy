import React, { useState, Component } from 'react';
import { BrowserRouter as Router, useHistory, Switch, withRouter, Link, Route } from 'react-router-dom';

import Header from './Header';
import Results from './Results';
import Profile from './Profile';
import Search from './Search';


const App = props => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  const [address, setAddress] = useState('');
  const history = useHistory();

  const onAddressSubmit = (address) => {
    let splitAddress = address.description.split(', ');
    const addressObj = {};
    addressObj['addressLine'] = splitAddress[0];
    addressObj['city'] = splitAddress[1];
    addressObj['state'] = splitAddress[2];
    return setAddress(addressObj);
    // history.push('/results')
  }
  const API_KEY = 'AIzaSyBHAs4K-WNgIbaFgjYvFML5zc8KQZ5Sgy8';
  // TO-DO: we'll need some logic, probably in useEffect, to detect login and set state appropriately

  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' >
            <Search address={address} apiKey={API_KEY} onSubmit={onAddressSubmit}/>
          </Route>
          <Route path='/results' address={address} isLoggedIn={isLoggedIn}>
            <Results />
          </Route>
          <Route path='/profile' address={address}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
};

export default App;