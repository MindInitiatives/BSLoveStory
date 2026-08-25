"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Love Story", href: "#story" },
  { label: "Registry", href: "#registry" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav${solid ? " nav--solid" : ""}`}>
        <a href="#home" className="nav__mark" onClick={(e) => handleNavClick(e, "#home")}>
          B &amp; S
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "is-active" : ""}
              aria-current={active === item.href ? "true" : undefined}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`nav__bar${menuOpen ? " is-x-top" : ""}`} />
          <span className={`nav__bar${menuOpen ? " is-hidden" : ""}`} />
          <span className={`nav__bar${menuOpen ? " is-x-bottom" : ""}`} />
        </button>
      </header>

      {menuOpen && (
        <div id="mobile-menu" className="nav__sheet">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
