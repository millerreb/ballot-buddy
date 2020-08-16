import React from 'react';
import { Button } from '@material-ui/core';

const NavLinks = ({ isLoggedIn }) => {
  
  return (
    <div className="nav-links">
      { isLoggedIn && <Button variant="contained" size="small" color="secondary">Profile</Button> }
      { isLoggedIn ? <Button variant="contained" size="small" color="secondary">Logout</Button> : <Button variant="contained" size="small" color="primary">Sign-in</Button> }
    </div>
  );
};

export default NavLinks;