import { ExternalLink, Github, Check } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal className="mb-12"><h2 className="h2">Projects</h2></Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/60">
              <div className="aspect-video overflow-hidden">
                <img src={p.image || "/projects/placeholder.svg"} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.description}</p>
                <ul className="mt-4 space-y-1 text-sm">{p.features?.map((f) => <li key={f} className="flex items-center gap-2"><Check size={14} className="text-accent" />{f}</li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech?.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                {(p.live || p.github) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink size={16} /> View Live Project</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={16} /> View Source Code</a>}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
