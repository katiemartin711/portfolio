import type { OutLink, Project, Section } from "../data/portfolio";
import { projects } from "../data/portfolio";

function ExternalAnchor({ link }: { link: OutLink }) {
  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
    </a>
  );
}

function CaseSection({ section }: { section: Section }) {
  return (
    <div className="case-block">
      <h4>{section.heading}</h4>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.table ? (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, index) => (
                    <td key={`${section.table?.headers[index]}-${index}`}>
                      <span className="cell-label">{section.table?.headers[index]}</span>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-top">
        <span className="number">{project.number}</span>
        <span className="kind">{project.kind}</span>
      </div>
      <h3>
        <a href={`#${project.id}`}>{project.title}</a>
      </h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Tools">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <dl className="stats">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="card-links">
        {project.links.map((link) => (
          <ExternalAnchor key={link.href} link={link} />
        ))}
        <a className="case-link" href={`#${project.id}`}>
          Case study
        </a>
      </div>
    </article>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <article id={project.id} className="case" aria-labelledby={`${project.id}-title`}>
      <header className="case-header">
        <p className="eyebrow">
          {project.number} · {project.kind}
        </p>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="summary">{project.summary}</p>
        <ul className="link-row">
          {project.links.map((link) => (
            <li key={link.href}>
              <ExternalAnchor link={link} />
            </li>
          ))}
        </ul>
      </header>
      {project.sections.map((section) => (
        <CaseSection key={section.heading} section={section} />
      ))}
      {project.embedHref ? (
        <p className="embed-note">
          <a href={project.embedHref} target="_blank" rel="noopener noreferrer">
            Open the Tableau dashboard in a new tab
          </a>
        </p>
      ) : null}
      {project.figures?.length ? (
        <div className={project.figures.length > 1 ? "shots" : "figure-single"}>
          {project.figures.map((figure) => (
            <figure key={figure.src}>
              {figure.still ? (
                <>
                  <img className="motion" src={figure.src} alt={figure.alt} />
                  <img className="still" src={figure.still} alt={figure.alt} />
                </>
              ) : (
                <img src={figure.src} alt={figure.alt} />
              )}
              <figcaption>{figure.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      <p className="back">
        <a href="#projects">Back to all projects</a>
      </p>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="section-label">
        <h2 id="projects-heading">Projects</h2>
      </div>
      <div className="section-body">
        <p className="intro">
          A mix of end-to-end analytics projects and software builds — from raw data to
          insight to a decision, or from an idea to an app someone can open.
        </p>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="cases">
          {projects.map((project) => (
            <CaseStudy key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
