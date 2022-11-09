import React from 'react';

import { NavItem } from './styles';

const NavbarLinks = () => {
  return (
    <>
      <NavItem href="/">Início</NavItem>
      <NavItem href="/sobre">Quem somos</NavItem>
      <NavItem href="/projetos">Projetos</NavItem>
      <NavItem href="/contato">Contato</NavItem>
      <NavItem href="/doacao">Quero doar</NavItem>
    </>
  );
};

export default NavbarLinks;
