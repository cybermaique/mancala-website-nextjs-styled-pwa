import * as React from 'react';
import { useState } from 'react';
import Logo from '../Logo';

import NavbarLinks from '../NavbarLinks';
import { Hamburger, Navbox, Navigation, Toggle } from './styles';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      {/* LOGO */}
      <Logo />
      <Toggle
        // navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
