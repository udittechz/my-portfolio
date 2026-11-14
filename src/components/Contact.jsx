import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { contact } from "../data/portfolio";

// Set VITE_FORMSPREE_ENDPOINT in .env (see README). Nothing is faked if it is missing.
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: undefined }); };

  async function onSubmit(ev) {
    ev.preventDefault();
    if (status === "loading") return;
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (!ENDPOINT) return setStatus("config");
    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error();
      setStatus("success"); setV(empty);
    } catch { setStatus("error"); }
  }

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm font-medium">{label}</label>
      {k === "message"
        ? <textarea id={k} rows="5" value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="w-full rounded-xl border border-fg/15 bg-fg/5 px-4 py-3 outline-none transition focus:border-accent" />
        : <input id={k} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="w-full rounded-xl border border-fg/15 bg-fg/5 px-4 py-3 outline-none transition focus:border-accent" {...props} />}
      <p id={`${k}-err`} className="mt-1 min-h-[1.25rem] text-sm text-red-400">{errors[k]}</p>
    </div>
  );

  const info = [[Mail, contact.email, contact.email && `mailto:${contact.email}`], [Phone, contact.phone, contact.phone && `tel:${contact.phone}`], [MapPin, contact.location, ""]].filter(([, t]) => t);

  return (
    <section id="contact" className="section">
      <Reveal className="mb-12"><h2 className="h2">Contact Me</h2><p className="mt-2 text-muted">Have an opportunity or a question? Send a message and I'll reply by email.</p></Reveal>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-6">
          {info.map(([Icon, text, href]) => (
            <div key={text} className="flex items-center gap-3"><Icon className="text-accent" size={20} />{href ? <a href={href} className="hover:text-accent">{text}</a> : <span>{text}</span>}</div>
          ))}
          <Socials />
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-x-4 sm:grid-cols-2">{field("name", "Full Name", { autoComplete: "name" })}{field("email", "Email Address", { type: "email", autoComplete: "email" })}</div>
            {field("subject", "Subject")}
            {field("message", "Message")}
            <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
              {status === "loading" ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
            </button>
            <div role="status" aria-live="polite" className="mt-4 text-sm">
              {status === "success" && <p className="flex items-center gap-2 text-emerald-400"><CheckCircle2 size={16} /> Message sent. Thank you, I'll get back to you soon.</p>}
              {status === "error" && <p className="flex items-center gap-2 text-red-400"><AlertCircle size={16} /> The message was not sent. Check your connection and try again.</p>}
              {status === "config" && <p className="flex items-center gap-2 text-amber-400"><AlertCircle size={16} /> The form is not connected to an email service yet. See the README, step "Connect the contact form".</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
