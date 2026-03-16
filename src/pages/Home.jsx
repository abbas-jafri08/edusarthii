import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="fade-in">
      {/* 1. Hero Section - Full Screen */}
      <section className="section-full home-hero-wrapper">
        <div className="container home-hero">
          <div className="hero-left">
            <span className="badge">Next-Gen Career Guidance</span>
            <h1>EduSarthi — Your Personalized Career & Education Guide</h1>
            <p className="hero-description">
              Navigate the transition after Class 10 & 12 with ease. Discover
              academic streams, top colleges, and career paths tailored to you.
            </p>

            <div className="home-cta">
              <Link to="/career/discover" className="btn-primary">
                Discover Path
              </Link>
              <Link to="/career/colleges" className="btn-secondary">
                Explore Colleges
              </Link>
            </div>

            {/* Horizontally Scrollable Quick Cards */}
            <div className="scroll-wrapper">
              <div className="quick-cards scroll-content">
                <div className="card card-compact clickable">
                  <div className="icon-box blue">⚡</div>
                  <div>
                    <div className="kicker">Quick Quiz</div>
                    <div className="card-title-sm">Find streams in 5 mins</div>
                  </div>
                </div>
                <div className="card card-compact clickable">
                  <div className="icon-box green">📍</div>
                  <div>
                    <div className="kicker">Local Colleges</div>
                    <div className="card-title-sm">Nearby Govt Hubs</div>
                  </div>
                </div>
                <div className="card card-compact clickable">
                  <div className="icon-box purple">🎓</div>
                  <div>
                    <div className="kicker">Scholarships</div>
                    <div className="card-title-sm">View open grants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="image-stack">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=60&auto=format&fit=crop"
                alt="Students collaborating"
                className="main-hero-img"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll down to learn more</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* 2. Features Section - Full Screen */}
      <section className="section-full features-section">
        <div className="container">
          <h2 className="section-title">How EduSarthi Helps</h2>
          <p className="section-subtitle">
            Comprehensive tools to guide you at every step of your academic
            journey.
          </p>

          <div className="scroll-wrapper">
            <div className="features-grid scroll-content">
              <div className="card feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Aptitude Quizzes</h3>
                <p className="subtext">
                  Science-backed assessments to find where your true potential
                  lies.
                </p>
              </div>
              <div className="card feature-card">
                <div className="feature-icon">🏛️</div>
                <h3>College Listings</h3>
                <p className="subtext">
                  Verified data on fees, placement, ranking, and admission
                  cycles.
                </p>
              </div>
              <div className="card feature-card">
                <div className="feature-icon">📅</div>
                <h3>Timeline Reminders</h3>
                <p className="subtext">
                  Never miss an application deadline or entrance exam date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section - Full Screen */}
      <section className="section-full testimonials-section">
        <div className="container">
          <h2 className="section-title">Student Stories</h2>
          <p className="section-subtitle">
            Hear from students who found their path with EduSarthi.
          </p>

          <div className="scroll-wrapper">
            <div className="testimonials-grid scroll-content">
              <div className="card testimonial-card">
                <div className="quote-icon">“</div>
                <p className="quote">
                  I was confused between Science and Commerce. The EduSarthi
                  quiz pointed out strengths I didn't know I had. Now I'm loving
                  my Biotech course!
                </p>
                <div className="testimonial-footer">
                  <div className="avatar">RS</div>
                  <div>
                    <div className="name">Rohan Sharma</div>
                    <div className="info">Class 12 Student, Mumbai</div>
                  </div>
                </div>
              </div>

              <div className="card testimonial-card">
                <div className="quote-icon">“</div>
                <p className="quote">
                  EduSarthi not only helped me find the right Engineering branch
                  but also listed the local government colleges with their
                  placement stats. Highly recommended!
                </p>
                <div className="testimonial-footer">
                  <div className="avatar green">PP</div>
                  <div>
                    <div className="name">Priya Patel</div>
                    <div className="info">First Year B.Tech, Ahmedabad</div>
                  </div>
                </div>
              </div>

              <div className="card testimonial-card">
                <div className="quote-icon">“</div>
                <p className="quote">
                  The timeline reminders were a lifesaver. I almost missed the
                  scholarship application deadline, but EduSarthi alerted me
                  just in time.
                </p>
                <div className="testimonial-footer">
                  <div className="avatar purple">AK</div>
                  <div>
                    <div className="name">Aman Khan</div>
                    <div className="info">Class 10 Student, Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section - Full Screen */}
      <section className="section-full final-cta-section">
        <div className="container final-cta-content card">
          <div className="feature-icon">🚀</div>
          <h2>Ready to Shape Your Future?</h2>
          <p className="subtext">
            Take the first step towards a fulfilling career. Get started for
            free today.
          </p>
          <div className="home-cta">
            <Link to="/career/discover" className="btn-primary">
              Take the Quiz
            </Link>
            <Link to="/career/colleges" className="btn-secondary">
              Explore Colleges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
