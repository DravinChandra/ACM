
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-warning">ACM</span> ABES
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-warning" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-warning" : ""}`
              }
              to="/events"
            >
              Events
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-warning" : ""}`
              }
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
