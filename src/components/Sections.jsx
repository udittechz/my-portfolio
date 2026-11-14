import { GraduationCap, Award, BadgeCheck, Trophy, Presentation, Code2, Star, ExternalLink, Target, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { about, education, achievements, skills } from "../data/portfolio";

const Title = ({ children, sub }) => (
  <Reveal className="mb-12"><h2 className="h2">{children}</h2>{sub && <p className="mt-2 max-w-2xl text-muted">{sub}</p>}</Reveal>
);

export function About() {
  return (
    <section id="about" className="section">
      <Title>About Me</Title>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-muted">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="glass flex gap-3 rounded-2xl p-5 text-fg"><Target className="mt-0.5 shrink-0 text-accent" size={20} /><p><b>Where I'm heading: </b><span className="text-muted">{about.goals}</span></p></div>
        </Reveal>
        <Reveal delay={150} className="space-y-6">
          {about.photo && <img src={about.photo} alt="" loading="lazy" className="w-full rounded-2xl object-cover" />}
          <div><h3 className="mb-3 font-display font-semibold">Interests</h3><div className="flex flex-wrap gap-2">{about.interests.map((x) => <span key={x} className="tag">{x}</span>)}</div></div>
          <div><h3 className="mb-3 font-display font-semibold">Strengths</h3><ul className="space-y-2 text-muted">{about.strengths.map((x) => <li key={x} className="flex items-center gap-2"><Sparkles size={14} className="text-accent2" />{x}</li>)}</ul></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <Title>Education</Title>
      <ol className="relative ml-3 border-l border-accent/40">
        {education.map((e, i) => (
          <Reveal key={i} delay={i * 80} className="mb-8 ml-8">
            <li className="list-none">
              <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-bg ring-2 ring-accent"><GraduationCap size={16} className="text-accent" /></span>
              <div className="glass rounded-2xl p-6">
                <p className="text-sm text-accent">{e.period}</p>
                <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
                <p>{e.institution}</p>
                <p className="text-muted">{e.field}</p>
                {e.details && <p className="mt-2 text-sm text-muted">{e.details}</p>}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

const icons = { academic: GraduationCap, award: Award, certification: BadgeCheck, competition: Trophy, workshop: Presentation, hackathon: Code2, other: Star };

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <Title>Achievements and Certifications</Title>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.type] || Star;
          return (
            <Reveal key={i} delay={i * 60}>
              <article className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
                {a.image && <img src={a.image} alt={`Certificate: ${a.title}`} loading="lazy" className="mb-4 aspect-video w-full rounded-lg object-cover" />}
                <Icon className="mb-3 text-accent transition group-hover:scale-110" size={26} />
                <h3 className="font-display font-semibold">{a.title}</h3>
                <p className="text-sm text-accent2">{a.issuer} &middot; {a.date}</p>
                <p className="mt-2 text-sm text-muted">{a.description}</p>
                {a.link && <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline">Verify certificate <ExternalLink size={14} /></a>}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const dots = { Beginner: 1, Intermediate: 2, Advanced: 3 };

export function Skills() {
  return (
    <section id="skills" className="section">
      <Title>Skills</Title>
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skills).map(([cat, list], i) => (
          <Reveal key={cat} delay={i * 60}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-4 font-display font-semibold text-accent">{cat}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {list.map((s) => (
                  <li key={s.name} className="flex items-center gap-2 rounded-xl border border-fg/10 bg-fg/5 px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-accent/60">
                    {s.name}
                    {s.level && <span className="flex gap-0.5" title={s.level}>{[1, 2, 3].map((d) => <i key={d} className={`h-1.5 w-1.5 rounded-full ${d <= dots[s.level] ? "bg-accent" : "bg-fg/20"}`} />)}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
