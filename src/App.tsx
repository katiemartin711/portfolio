import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { SiteHeader } from "./components/SiteHeader";
import { Skills } from "./components/Skills";
import { profile } from "./data/portfolio";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <div id="top" className="wrap">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>
            {profile.name} · {profile.location}
          </p>
          <p>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span aria-hidden="true"> · </span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
