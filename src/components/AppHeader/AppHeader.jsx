import React from 'react';
import { Container, Wrap } from '../components';
import {
  AppHeaderNavMenu,
  AppHeaderNavLink,
  WalletConnect,
  WalletImg,
  WalletP,
} from './app-header.style';
import Logo from '../Logo';
import walletImg from '../../assets/image/wallet.svg';

const AppHeader = () => {
  return (
    <>
      <Container bgColor="#fff">
        <Wrap
          bgColor="#182531"
          justCont="space-between"
          pad="0 24px"
          borB="4px solid rgba(20, 241, 149, 0.3)"
          noMaxW
        >
          <Logo />
          <AppHeaderNavMenu>
            <AppHeaderNavLink to="trading">Trading</AppHeaderNavLink>
            {/* <AppHeaderNavLink to="/app">Swap</AppHeaderNavLink> */}
            <AppHeaderNavLink to="swap">Swap</AppHeaderNavLink>
            <AppHeaderNavLink to="liquidity">Liquidity</AppHeaderNavLink>
            <AppHeaderNavLink to="pools">Pools</AppHeaderNavLink>
            <AppHeaderNavLink to="farms">Farms</AppHeaderNavLink>
            <AppHeaderNavLink to="staking">Staking</AppHeaderNavLink>
            <AppHeaderNavLink to="nfts">NFTs</AppHeaderNavLink>
          </AppHeaderNavMenu>
          <WalletConnect>
            <WalletImg src={walletImg} alt="" />
            <WalletP>Connect</WalletP>
          </WalletConnect>
        </Wrap>
      </Container>
    </>
  );
};

export default AppHeader;
