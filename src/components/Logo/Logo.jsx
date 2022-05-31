import React from 'react';
import { LogoLink, LogoImg } from './logo.style';
import logo from '../../assets/image/logo.svg';

const Logo = () => (
  <LogoLink to="/">
    <LogoImg src={logo} alt="logo" />
  </LogoLink>
);

export default Logo;
