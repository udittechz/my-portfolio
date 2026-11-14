# Personal Portfolio (React + Vite + Tailwind + Lucide)

All your content lives in **`src/data/portfolio.js`**. Edit that one file; no component changes needed.
Anything written as `[ ... ]` is a placeholder. Empty strings hide the related button or link.

## Install and run
Requires Node.js 18+.
```bash
npm install
cp .env.example .env     # Windows: copy .env.example .env
npm run dev              # opens http://localhost:5173
```
Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Replace your photo
Put your image in `public/` (for example `public/me.jpg`), then set `photo: "/me.jpg"` in `personal`. A square image around 800x800 works best.

## Add or edit projects
In `projects`, copy a block and edit it. Put screenshots in `public/projects/` and set `image: "/projects/shot.png"`.
- `live: "https://..."` shows **View Live Project**; leave `""` to hide it.
- `github: "https://github.com/..."` shows **View Source Code**; leave `""` to hide it.
Delete a block to remove a project.

## Update education, achievements, skills, socials
- `education`, `achievements`: copy and edit entries. Achievement `type` picks the icon.
- `skills`: add categories or items. Optional `level: "Beginner" | "Intermediate" | "Advanced"` shows three dots; remove it to hide.
- `socials`: paste full `https://` URLs; only filled ones appear in the Contact section and footer.
- `personal.resume`: put `resume.pdf` in `public/` and set `resume: "/resume.pdf"` to show a Resume button.

## Connect the contact form (Formspree, free)
1. Sign up at https://formspree.io and create a form using your email address; confirm the verification email.
2. Copy the form endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `.env` as `VITE_FORMSPREE_ENDPOINT=...` and restart `npm run dev`.
4. Send a test message. It arrives in your inbox.
Until this is set, the form shows a "not connected" notice instead of pretending to send.
(EmailJS also works: replace the `fetch` call in `src/components/Contact.jsx` with `emailjs.send(...)` and use `VITE_EMAILJS_*` variables.)

## Deploy
**Vercel:** push the project to GitHub, import it at https://vercel.com/new (Vite is detected automatically), add `VITE_FORMSPREE_ENDPOINT` under Settings > Environment Variables, then Deploy.
**Netlify:** import from GitHub, build command `npm run build`, publish directory `dist`, add the same environment variable.
Re-deploy after changing environment variables.
