import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '20px' }}> {/* Added margin to prevent overlap */}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
