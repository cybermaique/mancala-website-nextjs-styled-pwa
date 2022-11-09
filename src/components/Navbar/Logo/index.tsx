import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import logo from '../../../assets/logo.png';
import { LogoWrap } from './styles';

const Logo = () => {
  return (
    <LogoWrap>
      <Link href="/">
        <Image src={logo} alt="logo" width={220} />
      </Link>
    </LogoWrap>
  );
};

export default Logo;
