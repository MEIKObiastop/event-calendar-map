import React from 'react';

// ダミーデータ
const events = [
  { id: 1, name: '花火大会', date: '2025-10-06', category: 'お祭り' },
  { id: 2, name: '音楽フェス', date: '2025-10-07', category: '音楽' },
  { id: 3, name: 'フードフェア', date: '2025-10-08', category: '食' },
  { id: 4, name: 'アート展', date: '2025-10-09', category: 'アート' },
];

const SearchResult = ({ searchQuery, startDate, endDate, setViewMode, setSelectedEvent }) => {
  // 日付・検索文字列でフィルタリング
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const matchesDate = eventDate >= startDate && eventDate <= endDate;
    const matchesQuery =
      searchQuery === '' ||
      event.name.includes(searchQuery) ||
      event.category.includes(searchQuery);
    return matchesDate && matchesQuery;
  });

  return (
    <div className="search-result" style={{ padding: '10px' }}>
      {filteredEvents.length === 0 ? (
        <p>検索結果はありません。</p>
      ) : (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => {
              setSelectedEvent(event);      // 詳細表示用のイベントをセット
              setViewMode('eventDetail');   // 詳細画面に切り替え
            }}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>{event.name}</h3>
            <p style={{ margin: '0 0 3px 0' }}>{event.date}</p>
            <p style={{ margin: 0 }}>{event.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;