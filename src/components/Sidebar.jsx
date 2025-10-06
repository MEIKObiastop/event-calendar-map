// components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({ searchQuery, setSearchQuery, setViewMode }) => {
  const handleSearch = () => {
    setViewMode('search');
  };

  return (
    <aside style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc', background: '#f5f5f5' }}>
      <h3>検索</h3>
      <input
        type="text"
        placeholder="イベント名で検索"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
      />
      <button onClick={handleSearch} style={{ width: '100%', padding: '8px' }}>検索</button>

      <div style={{ marginTop: '20px' }}>
        <h4>簡易検索</h4>
        <button style={{ display: 'block', marginBottom: '5px', width: '100%' }}>本日</button>
        <button style={{ display: 'block', marginBottom: '5px', width: '100%' }}>明日</button>
        <button style={{ display: 'block', marginBottom: '5px', width: '100%' }}>3日後</button>
      </div>
    </aside>
  );
};

export default Sidebar;