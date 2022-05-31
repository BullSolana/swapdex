import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <>
      <div>AppHeader</div>
      <Link to="trading">trading</Link>
      <Link to="/app">Swap</Link>
      <Link to="liquidity">liquidity</Link>
      <Link to="pools">pools</Link>
      <Link to="farms">farms</Link>
      <Link to="staking">staking</Link>
      <Link to="nfts">NFTs</Link>
      <Outlet />
    </>
  );
};

export default AppHeader;
