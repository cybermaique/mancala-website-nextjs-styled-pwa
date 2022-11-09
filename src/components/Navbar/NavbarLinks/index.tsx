import React from 'react';

import { NavItem } from './styles';

const NavbarLinks = () => {
  return (
    <>
      <NavItem href="/">Início</NavItem>
      <NavItem href="/quem-somos">Quem somos</NavItem>
      <NavItem href="/projetos">Projetos</NavItem>
      <NavItem href="/contato">Contato</NavItem>
      <NavItem href="/quero-doar">Quero doar</NavItem>
    </>
  );
};

export default NavbarLinks;
