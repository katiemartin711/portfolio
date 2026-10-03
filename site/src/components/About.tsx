import { profile } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="section-label">
        <h2 id="about-heading">About</h2>
      </div>
      <div className="section-body">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h3 className="subhead">What I bring</h3>
        <ul className="plain-list">
          {profile.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
