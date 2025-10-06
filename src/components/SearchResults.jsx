// components/SearchResults.jsx
import React from 'react';

// ダミーデータ
const events = [
  { id: 1, name: '花火大会', date: '2025-10-06', category: 'お祭り' },
  { id: 2, name: '音楽フェス', date: '2025-10-07', category: '音楽' },
  { id: 3, name: 'フードフェア', date: '2025-10-08', category: '食' },
];

const SearchResults = ({ searchQuery, setViewMode }) => {
  const filtered = events.filter(event =>
    event.name.includes(searchQuery)
  );

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setViewMode('map')} style={{ marginBottom: '20px' }}>地図に戻る</button>
      <h3>検索結果: "{searchQuery}"</h3>
      <ul>
        {filtered.length > 0 ? (
          filtered.map(event => (
            <li key={event.id}>
              {event.name} ({event.date}) - {event.category}
            </li>
          ))
        ) : (
          <li>該当するイベントはありません</li>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;