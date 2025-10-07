import React from 'react';

const EventDetail = ({ event }) => {
  if (!event) return <div>イベントが選択されていません</div>;
  return (
    <div style={{ padding: '20px' }}>
      <h2>{event.name}</h2>
      <p>日付: {event.date}</p>
      <p>カテゴリ: {event.category}</p>
    </div>
  );
};

export default EventDetail;
