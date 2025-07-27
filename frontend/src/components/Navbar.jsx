import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // we'll create this CSS file

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Scheduler POC</h1>
      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Student Submission
        </Link>
        <Link
          to="/admin"
          className={location.pathname === "/admin" ? "active" : ""}
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}
