import React from 'react';
import { Button } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
const NavLinks = ({ isLoggedIn }) => {

  return (
    <div className="nav-links">
      {/* <a href="/auth/facebook">Login with Facebook</a> */}
      <div className="fb-share-button" data-href="https://www.cnn.com" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
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
