import React from 'react';
import { Button } from '@material-ui/core';
import FacebookLogin from 'react-facebook-login';
const NavLinks = ({ isLoggedIn }) => {
  
  const responseFacebook = (response) => {
    console.log(response);
    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response.status);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log(JSON.stringify(response))
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
  const componentClicked = () => {
    console.log( "Clicked!" )
  }
  return (
    <div className="nav-links">
      <a href="/auth/facebook">Login with Facebook</a>
      {/* { isLoggedIn && <Button variant="contained" size="small" color="secondary">Profile</Button> }
      { isLoggedIn ? <Button variant="contained" size="small" color="secondary">Logout</Button> : <Button variant="contained" size="small" color="primary">Sign-in</Button> } */}
    </div>
      // <FacebookLogin
      // appId="318062672725904"
      // autoLoad={true}
      // fields="name,email,picture"
      // onClick={componentClicked}
      // callback={responseFacebook} />
  );
};

// test comment

export default NavLinks;