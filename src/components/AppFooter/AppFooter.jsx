import React from 'react';
import { ColorSpan, Container } from '../components';
import Logo from '../Logo';

import {
  AppFooterWrap,
  AppFooterSocials,
  Social,
  SocialIcon,
  Copyright,
} from './app-footer.style';

import discord from '../../assets/image/discord.svg';
import telegram from '../../assets/image/telegram.svg';
import twitter from '../../assets/image/twitter.svg';

const AppFooter = () => {
  return (
    <Container>
      <AppFooterWrap>
        <Logo />
        <Copyright>
          &copy; Copyright {new Date().getFullYear()}&nbsp;
          <ColorSpan>Bulls Lab</ColorSpan> | All Rights Reserved
        </Copyright>
        <AppFooterSocials>
          <Social
            href="https://discord.io/BullSolana"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon src={discord} alt="" />
          </Social>
          <Social
            href="https://t.me/BullSolanaOfficial"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon src={telegram} alt="" />
          </Social>
          <Social
            href="https://twitter.com/bullsolana__"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon src={twitter} alt="" />
          </Social>
        </AppFooterSocials>
      </AppFooterWrap>
    </Container>
  );
};

export default AppFooter;
