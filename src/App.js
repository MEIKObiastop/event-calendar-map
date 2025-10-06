import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SearchResults from './components/SearchResults';

function App() {
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'search'
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      {/* ヘッダー */}
      <Header />

      <div className="App-body" style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        {/* 左メニュー */}
        <Sidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setViewMode={setViewMode}
        />

        {/* メインコンテンツ */}
        <div className="Main-content" style={{ flex: 1, position: 'relative' }}>
          {viewMode === 'map' ? (
            <Main />
          ) : (
            <SearchResults searchQuery={searchQuery} setViewMode={setViewMode} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;