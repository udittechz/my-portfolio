import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold">{personal.siteTitleShort}<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition hover:text-accent ${active === id ? "bg-accent/15 text-accent" : "text-muted"}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle light and dark theme" className="glass rounded-full p-2 transition hover:text-accent">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="glass rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-fg/10 px-5 pb-4 lg:hidden">
          {navLinks.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 ${active === id ? "text-accent" : "text-muted"}`}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
