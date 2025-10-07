import React from 'react';

const Sidebar = ({ setSearchQuery, setViewMode }) => {
  const today = new Date();
  const formatDate = (date) => date.toISOString().split('T')[0];

  const handleDateSearch = (offset) => {
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + offset);
    setSearchQuery(formatDate(targetDate));
    setViewMode('searchResult');
  };

  const handleCategorySearch = (category) => {
    setSearchQuery(category);
    setViewMode('searchResult');
  };

  return (
    <div style={{ padding: '16px', borderRight: '1px solid #ccc', height: '100vh' }}>
      <h3>検索</h3>
      <input
        type="text"
        placeholder="イベント名で検索"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '6px', marginBottom: '10px' }}
      />
      <button
        onClick={() => setViewMode('searchResult')}
        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
      >
        検索
      </button>

      <div style={{ marginBottom: '20px' }}>
        <h4>日付から探す</h4>
        <span className="link-button" onClick={() => handleDateSearch(0)}>本日</span>{' '}
        <span className="link-button" onClick={() => handleDateSearch(1)}>明日</span>{' '}
        <span className="link-button" onClick={() => handleDateSearch(2)}>明後日</span>
      </div>

      <div>
        <h4>ジャンルから探す</h4>
        {['お祭り', 'アート', '食', '音楽'].map((cat) => (
          <span
            key={cat}
            className="link-button"
            onClick={() => handleCategorySearch(cat)}
            style={{ marginRight: '8px' }}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;