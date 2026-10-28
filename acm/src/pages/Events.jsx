
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events");
        setEvents(response.data);
      } catch (err) {
        setError(
          "Unable to load events. Please check whether the backend server is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark mb-2">
          ACM ABES Student Chapter
        </span>

        <h1 className="display-5 fw-bold">Our Events</h1>

        <p className="text-secondary">
          Explore workshops, coding competitions, and exciting tech events.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading events...</p>
        </div>
      )}

      {/* Error Message */}
      {!loading && error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {/* No Events */}
      {!loading && !error && events.length === 0 && (
        <div className="alert alert-info text-center">
          No events are available right now. Please check back later!
        </div>
      )}

      {/* Events Grid */}
      {!loading && !error && events.length > 0 && (
        <div className="row g-4">
          {events.map((event) => (
            <div className="col-md-6 col-lg-4" key={event.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 d-flex flex-column">
                  <div
                    className="bg-warning rounded mb-3"
                    style={{ width: "50px", height: "5px" }}
                  ></div>

                  <h4 className="card-title fw-bold">
                    {event.title}
                  </h4>

                  <p className="card-text text-secondary flex-grow-1">
                    {event.description}
                  </p>

                  <Link
                    to={`/register?eventId=${event.id}`}
                    className="btn btn-dark w-100 mt-3"
                  >
                    Register Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
