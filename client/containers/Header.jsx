import React from 'react';

import NavLinks from '../components/NavLinks';
import Logo from '../components/Logo';
import BuddyQuote from '../components/BuddyQuote';

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <NavLinks isLoggedIn={ isLoggedIn } />
      <div className="logo-area">
      <Logo />
      <BuddyQuote />
      </div>
    </header>
  )
}

export default Header;