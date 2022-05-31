import React from 'react';
import AppHeader from '../../components/AppHeader';
import { Link } from 'react-router-dom';

const WebApp = () => {
  return (
    <>
      <div>WebApp</div>
      <Link to="/">Home</Link>
      <AppHeader />
    </>
  );
};

export default WebApp;
