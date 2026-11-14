import { useEffect, useState } from "react";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % personal.roles.length), 2400); return () => clearInterval(t); }, []);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent2/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-muted">Hi, I'm</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">{personal.name}</h1>
          <p className="mt-3 font-display text-xl text-accent sm:text-2xl">{personal.title}</p>
          <p className="mt-2 h-7 text-muted" aria-live="off">Interested in <span key={i} className="font-semibold text-fg">{personal.roles[i]}</span></p>
          <p className="mt-6 max-w-xl text-lg">{personal.tagline}</p>
          <p className="mt-3 max-w-xl text-muted">{personal.intro} {personal.goals}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore My Portfolio <ArrowDown size={16} /></a>
            <a href="#contact" className="btn-ghost"><Mail size={16} /> Contact Me</a>
            {personal.resume && <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FileText size={16} /> Resume</a>}
          </div>
        </div>
        <div className="order-1 mx-auto md:order-2">
          <div className="animate-float rounded-[2rem] bg-gradient-to-br from-accent to-accent2 p-1.5 shadow-2xl shadow-accent2/30">
            <img src={personal.photo} alt={`Portrait of ${personal.name}`} width="360" height="360" className="h-64 w-64 rounded-[1.7rem] object-cover sm:h-80 sm:w-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
