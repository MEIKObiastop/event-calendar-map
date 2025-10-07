import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import EventSummary from './EventSummary';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const events = [
  { id: 1, name: '花火大会', date: '2025-10-06', lat: 35.6895, lng: 139.6917, category: 'お祭り' },
  { id: 2, name: '音楽フェス', date: '2025-10-07', lat: 35.6890, lng: 139.7000, category: '音楽' },
  { id: 3, name: 'フードフェア', date: '2025-10-08', lat: 35.6850, lng: 139.6950, category: '食' },
  { id: 4, name: 'アート展', date: '2025-10-09', lat: 35.6900, lng: 139.6920, category: 'アート' },
];

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MainMap = ({ startDate, endDate, searchQuery, setViewMode, setSelectedEvent }) => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  // 日付と検索文字でフィルタ
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const matchesDate = eventDate >= startDate && eventDate <= endDate;
    const matchesQuery = searchQuery ? event.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesDate && matchesQuery;
  });

  return (
    <>
      <MapContainer center={[35.6895, 139.6917]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MarkerClusterGroup
          // クラスタクリック時に中のマーカーを取得してカード表示
          eventHandlers={{
            clusterclick: (e) => {
              e.originalEvent.preventDefault(); // デフォルトズームキャンセル
              const markers = e.layer.getAllChildMarkers();
              const eventsInCluster = markers.map((m) => m.options.eventData);
              setSelectedEvents(eventsInCluster);
            },
          }}
        >
          {filteredEvents.map(event => (
            <Marker
              key={event.id}
              position={[event.lat, event.lng]}
              icon={defaultIcon}
              // マーカー単体クリックでカード表示
              eventHandlers={{
                click: () => setSelectedEvents([event]),
              }}
              eventData={event} // クラスタ用にオプションとして渡す
            >
              <Popup>
                {event.name} <br /> {event.date} <br /> {event.category}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>

      {/* 選択イベント一覧（カード表示） */}
      {selectedEvents.length > 0 && (
        <div
          className="event-list"
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {selectedEvents.map(event => (
            <div
              key={event.id}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelectedEvent(event);
                setViewMode('eventDetail'); // カードクリックで詳細表示
              }}
            >
              <EventSummary event={event} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MainMap;