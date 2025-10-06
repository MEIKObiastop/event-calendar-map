import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import L from 'leaflet';

// ダミーデータ
const events = [
  { id: 1, name: '花火大会', date: '2025-10-06', lat: 35.6895, lng: 139.6917, category: 'お祭り' },
  { id: 2, name: '音楽フェス', date: '2025-10-07', lat: 35.6890, lng: 139.7000, category: '音楽' },
  { id: 3, name: 'フードフェア', date: '2025-10-08', lat: 35.6850, lng: 139.6950, category: '食' },
  { id: 4, name: 'アート展', date: '2025-10-09', lat: 35.6900, lng: 139.6920, category: 'アート' },
];

// デフォルトマーカー
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Main = () => {
  const [startDate, setStartDate] = useState(new Date('2025-10-06'));
  const [endDate, setEndDate] = useState(new Date('2025-10-09'));

  // 選択範囲内のイベントのみ表示
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= startDate && eventDate <= endDate;
  });

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* 日付選択 */}
      <div style={{ padding: '10px', background: '#eee', display: 'flex', gap: '10px' }}>
        <div>
          <label>開始日：</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy/MM/dd"
            withPortal
          />
        </div>
        <div>
          <label>終了日：</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}  // 終了日は開始日以降
            dateFormat="yyyy/MM/dd"
            withPortal
          />
        </div>
      </div>

      {/* 地図 */}
          <MapContainer
            center={[35.6895, 139.6917]}
            zoom={13}
            style={{ height: '400px', width: '100%', marginTop: '10px', border: '1px solid #ccc', borderRadius: '4px' }} // ①枠を作成
            scrollWheelZoom={false} // ②スクロールで拡大縮小無効化
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredEvents.map(event => (
              <Marker key={event.id} position={[event.lat, event.lng]} icon={defaultIcon}>
                <Popup>
                  {event.name} <br /> {event.date} <br /> {event.category}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
    </div>
  );
};

export default Main;