import React from 'react';
import { Button } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
const NavLinks = ({ isLoggedIn }) => {
  
  return (
    // <div className="nav-links">
    //   { isLoggedIn && <Button variant="contained" size="small" color="secondary">Profile</Button> }
    //   { isLoggedIn ? <Button variant="contained" size="small" color="secondary">Logout</Button> : <Button variant="contained" size="small" color="primary">Sign-in</Button> }
    // </div>
      <FacebookLogin
      appId="318062672725904"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />
  );
};

// test comment

export default NavLinks;