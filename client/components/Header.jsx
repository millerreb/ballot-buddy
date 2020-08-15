import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import BuddyQuote from './BuddyQuote';

const Header = ({isLoggedIn}) => {
  return (
    <NavLinks isLoggedIn={isLoggedIn} />
    <Logo />
    <BuddyQuote />
  )
}

export default Header;