import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navigation from '../shared/Navigation';

function Root() {
  return (
    <>
      {/* navigation */}
      <Navigation />

      {/* outlet */}
      <Outlet />

      {/* footer */}
      <Footer />
    </>
  );
}

export default Root;
