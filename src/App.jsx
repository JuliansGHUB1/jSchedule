import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentPage from './pages/StudentPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<StudentPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}

