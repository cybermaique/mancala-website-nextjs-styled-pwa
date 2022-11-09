import * as React from 'react';
import { useState } from 'react';
import Logo from '../Logo';

import NavbarLinks from '../NavbarLinks';
import {
  Hamburger,
  Navbox,
  Navigation,
  Toggle
} from './styles';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Logo />
      <Toggle
        //navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;
