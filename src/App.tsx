import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import ClubDetailPage from './pages/ClubDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="club/:clubId" element={<ClubDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;