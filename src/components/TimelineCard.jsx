import { useState } from "react";

export default function TimelineCard({ item }) {

  const [showMore, setShowMore] = useState(false);

  const lines = item.split("\n").filter(Boolean);

  // remove markdown ** from month
  const month = lines[0].replace(/\*\*/g, "");

  // remove "-" from events
  const details = lines.slice(1).map(line => line.replace(/^- /, ""));

  return (
    <div className="col-md-6 mb-4">

      {/* Month OUTSIDE card */}
      <h5 className="fw-bold text-primary mb-2">
        {month}
      </h5>

      <div className="card shadow-sm border border-dark">

        <div className="card-body">

          {(showMore ? details : details.slice(0,2)).map((line,i)=>(
            <p key={i} className="small mb-1">
              {line}
            </p>
          ))}

          {details.length > 2 && (
            <button
              className="btn btn-primary btn-sm mt-2"
              onClick={()=>setShowMore(!showMore)}
            >
              {showMore ? "Hide Details" : "View Details"}
            </button>
          )}

        </div>

      </div>

    </div>
  );
}