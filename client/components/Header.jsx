import React from 'react';

import NavLinks from './NavLinks';
import Logo from './Logo';
import BuddyQuote from './BuddyQuote';

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