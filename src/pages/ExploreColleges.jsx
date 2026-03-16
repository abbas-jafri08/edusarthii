import { useState } from "react";
import { askAI } from "../lib/groq";
import 'bootstrap/dist/css/bootstrap.min.css';
import CollegeCard from "../components/CollegeCard.jsx";

export default function ExploreColleges() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState("");

  async function findColleges() {
    if (!city.trim()) return;
    setLoading(true);

    const reply = await askAI(
      `List 5 government degree colleges in or near ${city}, India.
For each include:
- College name
- Programs offered
- Facilities (hostel, labs, library)
- Medium of instruction
Use bullet points.`
    );

    setColleges(reply);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Explore Government Colleges</h2>
        <p>Search for nearby colleges offering degree programs.</p>

        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ddd" }}
          />
          <button className="btn-primary" onClick={findColleges}>
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {colleges && (
          <div className="container mt-5" style={{ maxWidth: "1000px" }}>

  {(() => {
    const parts = colleges.split("\n\n");

    const heading = parts[0]; // first line
    const last = parts[parts.length - 1]; // last line
    const collegeList = parts.slice(1, parts.length - 1); // actual colleges

    return (
      <>
        {/* First Heading */}
        <h4 className="fw-bold text mb-4 text-center">
          {heading}
        </h4>

        {/* College Cards */}
        <div className="row justify-content-center">
          {collegeList.map((college, i) => (
            <CollegeCard key={i} college={college} />
          ))}
        </div>

        {/* Last Line */}
        <p className="text-center mt-3 text-muted">
          {last}
        </p>
      </>
    );
  })()}

</div>
        )}
      </div>
    </div>
  );
}