import React from 'react';
import logo from '../logo.png';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      height: '50px',
      padding: '0 20px',
      background: '#ffffff',
      color: 'black',
      fontSize: '16px'
    }}>
      <img src={logo} alt="自治体アイコン" style={{ height: '40px', marginRight: '15px' }} />
      <nav style={{ display: 'flex', gap: '15px' }}>
        <a href="#" style={{ color: 'black', textDecoration: 'none' }}>お祭りを探す</a>
        <a href="#" style={{ color: 'black', textDecoration: 'none' }}>イベントを探す</a>
      </nav>
    </header>
  );
};

export default Header;