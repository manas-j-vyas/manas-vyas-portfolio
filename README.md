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

The contact form validates in the browser and opens a prefilled `mailto:` link. No backend or email service is configured.

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
