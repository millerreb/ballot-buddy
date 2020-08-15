import React from 'react';
import { Button } from '@material-ui/core';

const NavLinks = ({ isLoggedIn }) => {
  
  return (
    <div className="nav-links">
      { isLoggedIn && <Button size="small" color="primary">Profile</Button> }
      {isLoggedIn ? <Button size="small" color="primary">Logout</Button> : <Button>Sign-in</Button>}
    </div>
  );
};

export default NavLinks;