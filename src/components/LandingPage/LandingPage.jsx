import React from 'react';
import { Container, Wrap } from '../components';
import {
  ColorSpan,
  LandingBtn,
  LandingH1,
  LandingH2,
  LandingP,
  TextWrap,
} from './landing-page.style';

const LandingPage = () => {
  return (
    <Container>
      <Wrap
        //
        // height="90vh"
        pad="32px"
        // pad="96px 32px"
        flexDir="column"
      >
        <TextWrap>
          <LandingH2>bull dex protocol</LandingH2>
          <LandingH1>
            proactive swap <ColorSpan>infrastructure</ColorSpan>
          </LandingH1>
          <LandingP>for everyone</LandingP>
        </TextWrap>
        <LandingBtn href="#">launch beta app</LandingBtn>
      </Wrap>
    </Container>
  );
};

export default LandingPage;
