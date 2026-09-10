# Manas Vyas Portfolio

A modern responsive personal portfolio website for **Manas Vyas, WordPress Developer**, built using React and Vite.

## About

Manas Vyas builds modern, responsive, user-friendly WordPress websites from Nallasopara, Mumbai, Maharashtra, India.

## Tech Stack

- React
- Vite
- JavaScript / JSX
- CSS
- Lucide React

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

The contact form validates in the browser and sends submissions through the server-side Vercel function at `/api/contact`. Visitor messages are not stored in the browser.

## Contact Form and Resend

1. Create a [Resend](https://resend.com) account and generate an API key.
2. Copy `.env.example` to `.env.local` for local configuration.
3. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL=manavvyas0205@gmail.com` in `.env.local`.
4. Use `CONTACT_FROM_EMAIL=Portfolio Website <onboarding@resend.dev>` for initial Resend testing, or replace it with a sender address on a verified domain.
5. For local Vercel function testing, use `vercel dev` so `/api/contact` is available; plain `npm run dev` serves the Vite frontend only.
6. In Vercel, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optionally `CONTACT_FROM_EMAIL` under Project Settings → Environment Variables.
7. Deploy and test a valid submission, validation errors, honeypot rejection, failure state, delivered fields, timestamp, and Reply-To behavior.

The Resend API key is used only by `api/contact.js`; it must never be placed in React code, `public/`, or committed `.env` files.

For diagnostics, `GET /api/contact` returns `{ "ok": true, "service": "contact-api" }`. A real submission must use `POST /api/contact`. The API logs only request/configuration presence and safe Resend error metadata; it never logs form contents or secrets.

The default `from` address is Resend's `onboarding@resend.dev` testing sender. Resend may restrict that sender to the account owner's testing email. For delivery to `manavvyas0205@gmail.com`, verify a domain in Resend and set `CONTACT_FROM_EMAIL` to a sender on that verified domain. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to the Vercel Production environment, then trigger a new deployment.

## Animation and Profile Image

GSAP and ScrollTrigger power the hero entrance, section/card reveals, project image parallax, navbar state, mobile menu, and scroll progress indicator. Animations use cleanup contexts, avoid layout properties, and respect `prefers-reduced-motion`. The custom cursor only runs for fine pointers and never captures pointer events.

The current hero uses a clearly marked local developer placeholder at `src/assets/images/profile/manas-vyas-placeholder.svg`. To use the real photo, add your image at `src/assets/images/profile/manas-vyas.jpg`, then update the `profileImage` import in `src/components/Hero/Hero.jsx`. Do not commit a photo you do not intend to publish.

## SEO Configuration

Set `VITE_SITE_URL` in a local `.env` file to the final HTTPS production domain before deploying. The React SEO component uses it for the canonical URL, absolute Open Graph image URL, and structured data. Replace the placeholder domain in `public/robots.txt` and `public/sitemap.xml` with the same value. Do not commit `.env` files.

## GitHub

Create `manas-vyas-portfolio` under the `manas-j-vyas` GitHub account, then authenticate manually and run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/manas-j-vyas/manas-vyas-portfolio.git
git push -u origin main
```

Inspect an existing remote with `git remote -v` before adding another one.

## Vercel Deployment

Import the GitHub repository into Vercel. Use the Vite defaults:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

No `vercel.json` is required. Vercel will redeploy automatically after future pushes to the connected branch. A specific `*.vercel.app` URL is subject to availability and is not claimed here.
