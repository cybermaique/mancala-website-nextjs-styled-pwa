import React from 'react';

import { NavItem } from './styles';

const NavbarLinks = () => {
  return (
    <>
      <NavItem href="/">Início</NavItem>
      <NavItem href="/about">Quem somos</NavItem>
      <NavItem href="/projects">Projetos</NavItem>
      <NavItem href="/contact">Contato</NavItem>
      <NavItem href="/donate">Quero doar</NavItem>
    </>
  );
};

export default NavbarLinks;
