import { useState } from "react";
import { askAI } from "../lib/groq";

export default function MapFuture() {

  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");

  async function generateRoadmap() {

    if (!course.trim()) return;

    setLoading(true);

    const reply = await askAI(
`Create a career roadmap for an Indian student pursuing ${course}.

FORMAT STRICTLY LIKE THIS:

Career Options
- Option 1
- Option 2

Government Exams
- Exam 1
- Exam 2

Higher Studies
- Option 1
- Option 2

Important Skills
- Skill 1
- Skill 2

Do NOT use ** or markdown formatting.
Only plain text.`
    );

    setRoadmap(reply);
    setLoading(false);
  }

  // Convert AI text into sections
  const sections = [];
  let current = null;

  roadmap
    .split("\n")
    .map(line => line.replace(/\*\*/g, "").trim())
    .filter(Boolean)
    .forEach(line => {

      if (!line.startsWith("-")) {
        current = { title: line, items: [] };
        sections.push(current);
      } else {
        current?.items.push(line.replace(/^- /, ""));
      }

    });

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow-sm border border-dark" style={{maxWidth:"800px", margin:"0 auto"}}>

        <h3 className="fw-bold text-primary">
          Course-to-Career Mapping
        </h3>

        <p className="text-muted">
          Enter a degree program to see possible career paths.
        </p>

        <div className="d-flex gap-2 mt-3">

          <input
            type="text"
            placeholder="e.g., B.Sc Computer Science"
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
            className="form-control"
          />

          <button
            className="btn btn-primary"
            onClick={generateRoadmap}
          >
            {loading ? "Loading..." : "Generate"}
          </button>

        </div>

      </div>

      {/* Roadmap Cards */}

      {sections.length > 0 && (

        <div className="row mt-4 g-4 justify-content-center">

          {sections.map((section, index)=>(
            
            <div className="col-md-6" key={index}>

              <div className="card shadow-sm border border-dark h-100">

                <div className="card-body">

                  <h5 className="fw-bold text-primary mb-3">
                    {section.title}
                  </h5>

                  {section.items.map((item,i)=>(
                    <p key={i} className="small mb-1">
                      • {item}
                    </p>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}