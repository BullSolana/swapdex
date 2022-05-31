import React from 'react';
import { LogoLink, LogoImg } from './logo.style';
import logo from '../../assets/image/logo.svg';

const Logo = () => {
  return (
    <>
      <div>Logo</div>
      <LogoLink href="#">
        <LogoImg src={logo} alt="logo" />
      </LogoLink>
    </>
  );
};

export default Logo;
