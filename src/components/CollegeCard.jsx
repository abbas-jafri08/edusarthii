import { useState } from "react";

function CollegeCard({ college }) {

  const [showDetails, setShowDetails] = useState(false);

  const lines = college.split("\n");
  const name = lines[0].replace(/\*\*/g, "");
  const details = lines.slice(1);

  return (

    <div className="col-md-6 mb-4">

      <div className="card h-100 shadow-sm border border-primary">

        <div className="card-body">

          {/* College Name + Logo */}
          <div className="d-flex align-items-center mb-3">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              width="40"
              className="me-3"
            />

            <h5 className="fw-bold text-primary m-0">
              {name}
            </h5>

          </div>

          {/* Details */}
          {(showDetails ? details : details.slice(0,2)).map((line, i)=>{

            const clean = line.replace(/\*\*/g,"");

            if(
              clean.includes("Programs") ||
              clean.includes("Facilities")
            ){
              return (
                <h6 key={i} className="fw-semibold mt-2">
                  {clean.replace("-","")}
                </h6>
              );
            }

            return (
              <p key={i} className="small mb-1">
                {clean.replace("+","")}
              </p>
            );
          })}

          {/* Fees */}
          <p className="fw-semibold mt-3">
            💰 Approx Fees: ₹10,000 – ₹40,000 / year
          </p>

          {/* Button */}
          <button
            className="btn btn-primary btn-sm mt-2"
            onClick={()=>setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "View Details"}
          </button>

        </div>

      </div>

    </div>

  );
}

export default CollegeCard;