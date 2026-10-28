
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* About */}
          <div className="col-md-4">
            <h4 className="fw-bold">
              <span className="text-warning">ACM</span> ABES
            </h4>
            <p className="text-secondary mt-3">
              A student community dedicated to technology, innovation,
              collaboration, and learning through events and workshops.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/events"
                  className="text-secondary text-decoration-none"
                >
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/register"
                  className="text-secondary text-decoration-none"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Connect With Us</h5>
            <p className="text-secondary mb-2">
              ABES Engineering College, Ghaziabad
            </p>
            <a
              href="https://www.acm.org/"
              target="_blank"
              rel="noreferrer"
              className="text-warning text-decoration-none"
            >
              Visit ACM Official Website →
            </a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-secondary mb-0">
            © {new Date().getFullYear()} ACM ABES Student Chapter.
            All rights reserved.
          </p>

          <p className="text-secondary mb-0">
            Built with <span className="text-danger">♥</span> by students
          </p>
        </div>
      </div>
    </footer>
  );
}
