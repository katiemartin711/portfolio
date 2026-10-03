import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">{profile.role}</p>
        <h1 id="hero-heading">{profile.name}</h1>
        <p className="lede">{profile.lede}</p>
        <p className="meta">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.availability}</span>
        </p>
        <div className="actions">
          <a className="button primary" href="#projects">
            See the work
          </a>
          <a className="button" href={profile.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
          <a className="button quiet" href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </div>
      <figure className="portrait">
        <img
          src="images/portrait.jpg"
          alt="Katie Martin, smiling outdoors in a garden."
          width={1200}
          height={1600}
        />
        <figcaption>Hutto, Texas · open to remote roles</figcaption>
      </figure>
    </section>
  );
}
