import { experience } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="section-label">
        <h2 id="experience-heading">Experience</h2>
      </div>
      <div className="section-body">
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role + job.when}>
              <p className="when">{job.when}</p>
              <h3>{job.role}</h3>
              <p className="where">{job.org}</p>
              {job.summary ? <p>{job.summary}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
