import { useState } from "react";
import { askAI } from "../lib/groq";
import TimelineCard from "../components/TimelineCard";

export default function StayOnTrack() {

  const [classLevel, setClassLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState("");

  async function getTimeline() {

    if (!classLevel.trim()) return;

    setLoading(true);

    const reply = await askAI(
      `Generate a timeline for an Indian student in ${classLevel}.

FORMAT STRICTLY LIKE THIS:

January
- Event 1
- Event 2
- Event 3

February
- Event 1
- Event 2

Do NOT use ** or markdown formatting.
Only plain text.`
    );

    setTimeline(reply);
    setLoading(false);
  }

  const timelineParts = timeline.split("\n\n");

  return (

    <div className="container mt-5" style={{maxWidth:"1000px"}}>

      <div className="card p-4 shadow-sm border border-dark">

        <h3 className="fw-bold text-primary">
          Stay on Track
        </h3>

        <p className="text-muted">
          Check admission and scholarship timelines.
        </p>

        <div className="d-flex gap-2 mt-3">

          <input
            type="text"
            placeholder="e.g., Class 12 Commerce"
            value={classLevel}
            onChange={(e)=>setClassLevel(e.target.value)}
            className="form-control"
          />

          <button
            className="btn btn-primary"
            onClick={getTimeline}
          >
            {loading ? "Loading..." : "Generate"}
          </button>

        </div>

      </div>

      {timeline && (

        <div className="mt-4">

          <h4 className="fw-bold text-primary text-center mb-4">
            Timeline
          </h4>

          <div className="row justify-content-center">

            {timelineParts.map((item,i)=>(
              <TimelineCard key={i} item={item}/>
            ))}

          </div>

        </div>

      )}

    </div>
  );
}