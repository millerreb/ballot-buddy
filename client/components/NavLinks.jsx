import React from 'react';
import { Button } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
const NavLinks = ({ isLoggedIn }) => {

  return (
    <div className="nav-links">
      <a href="/auth/facebook">Login with Facebook</a>
    </div>
      // <FacebookLogin
      // appId="318062672725904"
      // autoLoad={true}
      // fields="name,email,picture"
      // onClick={componentClicked}
      // callback={responseFacebook} />
  );
};

export default NavLinks;
