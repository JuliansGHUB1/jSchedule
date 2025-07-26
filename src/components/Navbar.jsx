import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-3">
      <h1 className="text-lg font-bold">Scheduler POC</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className={`hover:underline ${location.pathname === '/' ? 'font-semibold' : ''}`}
        >
          Student Submission
        </Link>
        <Link
          to="/admin"
          className={`hover:underline ${location.pathname === '/admin' ? 'font-semibold' : ''}`}
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}
