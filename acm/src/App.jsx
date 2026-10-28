
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          <Route path="/register" element={<Register />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="container text-center py-5">
                <h1 className="display-4 fw-bold">404</h1>
                <h3>Page Not Found</h3>
                <p className="text-secondary">
                  Sorry, the page you are looking for does not exist.
                </p>
                <a href="/" className="btn btn-dark">
                  Back to Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
