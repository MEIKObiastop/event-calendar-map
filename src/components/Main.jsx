import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from './Sidebar';
import MainMap from './MainMap';
import EventDetail from './EventDetail';
import SearchResult from './SearchResult';
import '../App.css';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date('2025-10-06'));
  const [endDate, setEndDate] = useState(new Date('2025-10-09'));
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('map'); // 'map' | 'searchResult' | 'eventDetail'
  const [selectedEvent, setSelectedEvent] = useState(null); // 選択されたイベント

  return (
      <div className="main-layout">
        {/* サイドバー */}
        <aside className="sidebar">
          <Sidebar setSearchQuery={setSearchQuery} setViewMode={setViewMode} />
        </aside>

        {/* メインコンテンツ */}
        <div className="main-content">
          {/* 日付範囲選択 */}
          <div style={{ padding: '10px', background: '#eee', display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'nowrap' }}>
            <span>検索期間</span>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy/MM/dd"
              withPortal
            />
            <span>～</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="yyyy/MM/dd"
              withPortal
            />
          </div>

          {/* 表示切替 */}
          {viewMode === 'map' && (
            <MainMap
              startDate={startDate}
              endDate={endDate}
              searchQuery={searchQuery}
              setViewMode={setViewMode}
              setSelectedEvent={setSelectedEvent}
            />
          )}

          {viewMode === 'searchResult' && (
            <SearchResult
              searchQuery={searchQuery}
              startDate={startDate}
              endDate={endDate}
              setViewMode={setViewMode}
              setSelectedEvent={setSelectedEvent}
            />
          )}

          {viewMode === 'eventDetail' && selectedEvent && (
            <EventDetail event={selectedEvent} />
          )}
        </div>
      </div>
  );
};

export default Main;