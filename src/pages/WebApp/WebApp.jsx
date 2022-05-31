import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import { WebAppContent } from './web-app.style';

const WebApp = () => {
  return (
    <>
      <AppHeader />
      <WebAppContent>
        <Outlet />
      </WebAppContent>
      <AppFooter />
    </>
  );
};

export default WebApp;
