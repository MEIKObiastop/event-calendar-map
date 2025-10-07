import React from 'react';

const EventSummary = ({ event, onClick }) => {
  return (
    <div
      className="event-card"
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      style={{ cursor: 'pointer' }}
    >
      <span className="event-date">{event.date}</span>
      <span className="event-name">{event.name}</span>
      <span className="event-category">{event.category}</span>
    </div>
  );
};

export default EventSummary;