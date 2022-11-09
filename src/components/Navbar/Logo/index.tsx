import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.png';

const Logo = () => {
  return (
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
        />
      </Link>
  );
};

export default Logo;
