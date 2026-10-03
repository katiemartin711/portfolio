import { profile } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="section-label">
        <h2 id="contact-heading">Contact</h2>
      </div>
      <div className="section-body">
        <p>
          I'm actively looking for data analyst and software development roles and would love
          to connect.
        </p>
        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/katiemartin711
            </a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              katie-martin-43628028
            </a>
          </li>
          <li>
            <span>Résumé</span>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              View résumé
            </a>
          </li>
        </ul>
        <blockquote>
          <p>{profile.hiringNote}</p>
        </blockquote>
      </div>
    </section>
  );
}
