import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// アプリの主要コンポーネントをインポート
import Header from './components/Header';
import Main from './components/Main';
import SearchResults from './components/SearchResult';

function App() {
  return (
    // Router でアプリ全体を包むことで、
    // useNavigate や <Link>、<Routes>/<Route> を使用できるようにする
    <Router>
      <div className="App">
        {/* ヘッダー部分 */}
        {/* Header 内で useNavigate() や <Link> を使ってページ遷移できる */}
        <Header />

        {/* メインのボディ部分 */}
        <div
          className="App-body"
          style={{
            display: 'flex',
            height: 'calc(100vh - 60px)', // ヘッダーの高さ分を除いた高さ
          }}
        >
          <div
            className="Main-content"
            style={{
              flex: 1, // 横幅いっぱいに広げる
              position: 'relative', // 子コンポーネントの絶対配置に対応
            }}
          >
            {/* Routes 内で URL パスに応じて表示コンポーネントを切り替える */}
            <Routes>
              {/* トップページ（地図画面） */}
              <Route path="/" element={<Main />} />

              {/* 検索結果ページ */}
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;