# Portfolio Website

A personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, based on your wireframes: a pill-shaped nav (Home / About / Work / Gallery) with light/dark mode, an animated hero, an About page with experience/skills/education timelines, a Work grid, and a Gallery slideshow.

## Tech Stack

- React 18 + Vite
- Tailwind CSS (dark mode via `class`)
- React Router (multi-page navigation)
- Framer Motion (animations)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Personalizing the Site

Everything text/content-related lives in **one file**: `src/data/content.js`. Edit that file to update:

- Your name, designation, bio, socials, resume link (`profile`)
- Hero intro lines (`heroIntro`)
- Work experience entries (`experience`)
- Technical skills by category (`skills`)
- Certifications (`certifications`)
- Education timeline (`education`)
- Projects — name, image, tech stack, link (`projects`)
- Gallery images (`gallery`)

### Making the Contact form actually work

The "Let's Connect" contact form uses [Formspree](https://formspree.io) to deliver submissions straight to your inbox — no backend needed.

1. Sign up for a free account at [formspree.io](https://formspree.io/register).
2. Click **+ New Form**, name it anything (e.g. "Portfolio Contact"), and set the recipient email to your own.
3. Copy the 8-character Form ID from the form's endpoint URL (e.g. `https://formspree.io/f/abcd1234` → ID is `abcd1234`).
4. Paste it into `src/data/content.js`:

```js
formspreeId: 'abcd1234',
```

Until you add a real ID, the form will show a friendly "not wired up yet" notice instead of silently failing.

### Adding your own images/resume

Drop files into the `public/` folder and reference them with a leading `/`, e.g.:

- `public/profile.jpg` → `photo: '/profile.jpg'`
- `public/resume.pdf` → `resumeUrl: '/resume.pdf'`
- `public/projects/my-app.png` → `image: '/projects/my-app.png'`

Placeholder SVGs are currently used for the profile photo, project thumbnails, and gallery images — swap them out with real photos/screenshots whenever you're ready.

## Project Structure

```
src/
  components/   # Navbar, Footer, ProjectCard, Slideshow, Contact, SkillBar
  context/      # ThemeContext (dark/light mode)
  data/         # content.js — all editable site content
  pages/        # Home, About, Work, Gallery
```

## Deployment

This is a static Vite app — deploy the `dist/` folder (after `npm run build`) to Vercel, Netlify, GitHub Pages, or any static host.
