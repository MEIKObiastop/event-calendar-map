import React from 'react';
import logo from '../logo.png';

const Header = () => {
  const handleMapClick = () => {
    // ブラウザのURLを強制的に / に変更してページリロード
    window.location.href = '/';
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        padding: '0 20px',
        background: '#ffffff',
        color: 'black',
        fontSize: '16px',
      }}
    >
      {/* 左側のロゴ */}
      <img src={logo} alt="自治体アイコン" style={{ height: '40px', marginRight: '15px' }} />

      {/* ナビゲーション部分 */}
      <nav style={{ display: 'flex', gap: '15px' }}>
        <span
          onClick={handleMapClick}
          style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}
        >
          MAPに戻る
        </span>
      </nav>
    </header>
  );
};

export default Header;