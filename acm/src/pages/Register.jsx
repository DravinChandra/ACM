
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [searchParams] = useSearchParams();

  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    eventId: searchParams.get("eventId") || "",
  });

  const [loadingEvents, setLoadingEvents] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events");
        setEvents(response.data);
      } catch (err) {
        console.error("Events error:", err);

        setError(
          "Could not load events. Please check the backend server."
        );
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  // Submit registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const name = form.name.trim();
    const email = form.email.trim();
    const eventId = String(form.eventId).trim();

    if (!name || !email || !eventId) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await api.post("/register", {
        name,
        email,
        eventId,
      });

      setSuccess(
        response.data.message || "Registration successful!"
      );

      setForm({
        name: "",
        email: "",
        eventId: "",
      });
    } catch (err) {
      console.error(
        "Registration error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Registration failed. Please check the backend."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Support both event.id and event._id
  const getEventId = (event) => {
    return event.id ?? event._id ?? "";
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          {/* Heading */}
          <div className="text-center mb-4">
            <span className="badge bg-warning text-dark mb-2">
              ACM ABES Student Chapter
            </span>

            <h1 className="fw-bold display-6">
              Event Registration
            </h1>

            <p className="text-secondary">
              Fill in your details to register for an event.
            </p>
          </div>

          {/* Registration Form */}
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success" role="alert">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label fw-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Event Selection */}
                <div className="mb-4">
                  <label
                    htmlFor="eventId"
                    className="form-label fw-semibold"
                  >
                    Select Event
                  </label>

                  <select
                    className="form-select form-select-lg"
                    id="eventId"
                    name="eventId"
                    value={form.eventId}
                    onChange={handleChange}
                    disabled={
                      loadingEvents || events.length === 0
                    }
                    required
                  >
                    <option value="">
                      {loadingEvents
                        ? "Loading events..."
                        : events.length === 0
                          ? "No events available"
                          : "Choose an event"}
                    </option>

                    {events.map((event) => {
                      const id = getEventId(event);

                      return (
                        <option
                          key={id || event.title}
                          value={id}
                        >
                          {event.title}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-dark btn-lg w-100"
                  disabled={
                    submitting ||
                    loadingEvents ||
                    events.length === 0
                  }
                >
                  {submitting
                    ? "Submitting..."
                    : "Register Now"}
                </button>
              </form>
            </div>
          </div>

          <p className="text-center text-secondary small mt-3">
            Please ensure your details are correct before submitting.
          </p>
        </div>
      </div>
    </div>
  );
}
