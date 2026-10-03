import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const apply = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      const next = `${height}px`;
      if (document.documentElement.style.getPropertyValue("--header") !== next) {
        document.documentElement.style.setProperty("--header", next);
      }
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [open]);

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 110;
      let current = links[0].id;
      for (const link of links) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = link.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">KM</span>
        <span className="brand-name">{profile.name}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "site-nav open" : "site-nav"} aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-current={active === link.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="nav-resume" href={profile.resume} target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </nav>
    </header>
  );
}
