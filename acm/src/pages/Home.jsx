
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-warning text-dark mb-3 px-3 py-2">
                ACM ABES Student Chapter
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Learn. Build. <span className="text-warning">Innovate.</span>
              </h1>

              <p className="lead text-light mb-4">
                A community of curious minds passionate about technology,
                coding, creativity, and innovation. Learn new skills,
                collaborate with students, and turn your ideas into reality.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/events" className="btn btn-warning btn-lg fw-bold">
                  Explore Events →
                </Link>

                <Link
                  to="/register"
                  className="btn btn-outline-light btn-lg"
                >
                  Join Our Community
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4 p-md-5 rounded-4 border border-secondary bg-black">
                <div className="text-warning display-1 fw-bold">ACM</div>
                <h2 className="fw-bold mt-3">Ideas into Impact</h2>
                <p className="text-secondary mb-0">
                  Connect with technology, discover opportunities, and
                  grow together.
                </p>

                <div className="row mt-4 g-3">
                  <div className="col-6">
                    <div className="border border-secondary rounded-3 p-3">
                      <h5 className="text-warning fw-bold mb-1">Learn</h5>
                      <small className="text-light">New skills</small>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border border-secondary rounded-3 p-3">
                      <h5 className="text-warning fw-bold mb-1">Create</h5>
                      <small className="text-light">Build projects</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h2 className="display-6 fw-bold">
                More Than Just a <span className="text-warning">Chapter</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="text-secondary fs-5">
                ACM ABES Student Chapter brings students together to explore
                computing, exchange ideas, develop practical skills, and
                experience technology beyond the classroom.
              </p>

              <p className="text-secondary">
                From technical workshops and coding challenges to teamwork
                and peer learning, we aim to create opportunities for students
                to learn, experiment, and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">What We Do</h2>
            <p className="text-secondary">
              Opportunities to explore your interests and develop your skills.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">💻</div>
                  <h4 className="fw-bold">Technical Workshops</h4>
                  <p className="text-secondary mb-0">
                    Explore programming, web development, and emerging
                    technologies through hands-on learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">🚀</div>
                  <h4 className="fw-bold">Coding & Innovation</h4>
                  <p className="text-secondary mb-0">
                    Challenge yourself with coding activities, project ideas,
                    and collaborative problem-solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">🤝</div>
                  <h4 className="fw-bold">Community & Growth</h4>
                  <p className="text-secondary mb-0">
                    Meet like-minded students, share knowledge, and improve
                    your communication and teamwork skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <div className="container py-4">
          <div className="bg-warning rounded-4 p-4 p-md-5 text-center">
            <h2 className="fw-bold display-6">
              Ready to Start Your Journey?
            </h2>

            <p className="mb-4">
              Discover upcoming events and take your next step with our
              student community.
            </p>

            <Link to="/events" className="btn btn-dark btn-lg">
              Discover Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
