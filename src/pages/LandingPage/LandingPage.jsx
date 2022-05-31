import React from 'react';
import { Wrap } from '../../components/components';
import Header from '../../components/Header';
import {
  ColorSpan,
  LandingBtn,
  LandingH1,
  LandingH2,
  LandingP,
  Container,
  TextWrap,
} from './landing-page.style';
import imgURL from '../../assets/image/landing.webp';

const LandingPage = () => {
  return (
    <Container bgImg={imgURL}>
      <Header />
      <Wrap pad="32px 24px" flexDir="column">
        <TextWrap>
          <LandingH2>bull dex protocol</LandingH2>
          <LandingH1>
            proactive swap <ColorSpan>infrastructure</ColorSpan>
          </LandingH1>
          <LandingP>for everyone</LandingP>
        </TextWrap>
        <LandingBtn to="app">launch beta app</LandingBtn>
      </Wrap>
    </Container>
  );
};

export default LandingPage;
