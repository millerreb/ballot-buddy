import React from 'react';
import { Button } from '@material-ui/core';

const NavLinks = ({ isLoggedIn }) => {

  return (
    <div className="nav-links">
      <a href="/auth/facebook">Login with Facebook</a>
    </div>
  );
};

export default NavLinks;
