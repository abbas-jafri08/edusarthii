import { Link } from "react-router-dom";

export default function Dashboard(){
  return (
    <div className="dashboard-container">

  {/* LEFT SIDEBAR */}
  <aside className="dashboard-sidebar card">

    <div className="student-profile">
      <div className="avatar"></div>

      <div>
        <h3 className="student-name">Welcome User!</h3>
        <p className="student-class">Class 12 • Science Stream</p>
      </div>
    </div>

    <div className="sidebar-section">
      <h4 className="section-title">Saved Colleges</h4>
      <ul className="college-list">
        <li>Government Degree College A</li>
        <li>Lucknow University</li>
        <li>Government Science College</li>
      </ul>
    </div>

    <div className="sidebar-section">
      <h4 className="section-title">Courses Enrolled</h4>
      <ul className="college-list">
        <li>BSc Computer Science</li>
        <li>Data Science Foundation</li>
      </ul>
    </div>

  </aside>


  {/* MAIN DASHBOARD */}
  <main className="dashboard-main">

    {/* STATS */}
    <div className="stats-grid">

      <div className="stat-card card">
        <h4>Colleges Viewed</h4>
        <p className="stat-number">12</p>
      </div>

      <div className="stat-card card">
        <h4>Applications Sent</h4>
        <p className="stat-number">4</p>
      </div>

      <div className="stat-card card">
        <h4>College Emails</h4>
        <p className="stat-number">7</p>
      </div>

      <div className="stat-card card">
        <h4>Saved Colleges</h4>
        <p className="stat-number">3</p>
      </div>

    </div>


    {/* RECOMMENDATION */}
    <div className="card recommendation-card">

      <h3>AI Career Recommendation</h3>

      <p className="recommend-title">
        Suggested Stream: B.Sc (Computer Science)
      </p>

      <p className="recommend-desc">
        Based on your interests in technology and problem solving,
        computer science programs are highly aligned with your profile.
      </p>

    </div>


    {/* PROGRESS */}
    <div className="card">

      <h3>Student Progress</h3>

<div className="progress-item">
  <div className="progress-header">
    <span>Application Progress</span>
    <span className="progress-percent">65%</span>
  </div>

  <div className="progress-bar">
    <div className="progress-fill" style={{ width: "65%" }}></div>
  </div>
</div>

<div className="progress-item">
  <div className="progress-header">
    <span>Course Completion</span>
    <span className="progress-percent">40%</span>
  </div>

  <div className="progress-bar">
    <div className="progress-fill" style={{ width: "40%" }}></div>
  </div>
</div>
    </div>


    {/* GRAPH / TRACKING */}
    <div className="card">

      <h3>Activity Tracking</h3>

      <div className="graph-placeholder">
        Weekly activity graph will appear here
      </div>

    </div>


    {/* DEADLINES */}
    <div className="card">

      <h3>Upcoming Deadlines</h3>

      <ul className="deadline-list">
        <li>UG Admissions – June 10, 2025</li>
        <li>Scholarship Form – June 15, 2025</li>
        <li>Entrance Exam Registration – June 25, 2025</li>
      </ul>

    </div>

  </main>

</div>
  );
}
