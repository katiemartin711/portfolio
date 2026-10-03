import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-label">
        <h2 id="skills-heading">Skills</h2>
      </div>
      <div className="section-body">
        <div className="table-wrap">
          <table className="skills-table">
            <caption className="sr-only">Tools and technologies by category</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Tools &amp; technologies</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.category}>
                  <th scope="row">{skill.category}</th>
                  <td>{skill.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
