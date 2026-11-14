import { ArrowUp } from "lucide-react";
import Socials from "./Socials";
import { personal, navLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-fg/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-lg font-bold">{personal.name}</p><p className="text-sm text-muted">{personal.tagline}</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">{navLinks.map(([id, l]) => <li key={id}><a href={`#${id}`} className="hover:text-accent">{l}</a></li>)}</ul></nav>
        <Socials />
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-8 text-sm text-muted sm:px-8">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <a href="#home" aria-label="Back to top" className="glass rounded-full p-2 transition hover:-translate-y-1 hover:text-accent"><ArrowUp size={18} /></a>
      </div>
    </footer>
  );
}
