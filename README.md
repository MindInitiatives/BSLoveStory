# Blessing & Stephen — Wedding Website

A Next.js wedding website for [bslovestory.com](https://bslovestory.com), built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Smooth scroll single-page layout: Hero, Love Story, Registry, Gallery
- Mobile-responsive with a fullscreen hamburger menu
- Lightbox gallery with keyboard-friendly navigation
- Copy-to-clipboard account number with toast feedback
- Expandable love story cards
- Self-hosted fonts (Playfair Display + Jost + Great Vibes) — no external font requests

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding photos

Place your photos in `/public/photos/` with these filenames:

| File | Usage |
|------|-------|
| `park-bw.jpeg` | Hero background |
| `traditional-embrace.jpeg` | Gallery photo 1 |
| `studio-looking-back.jpeg` | Gallery photo 2 |
| `studio-standing.jpeg` | Gallery photo 3 |
| `studio-standing-bw.jpeg` | Gallery photo 4 |
| `traditional-portrait.jpeg` | Gallery photo 5 |
| `traditional-close.jpeg` | Gallery photo 6 |

The `Image` components already reference these filenames — once you add the matching files to `/public/photos/`, they'll be served locally automatically, no config needed.

## Deploying to Vercel

```bash
npx vercel
```

Or push to GitHub and connect the repo to [vercel.com](https://vercel.com) for automatic deployments.

## Customising

- **Colors**: edit CSS variables in `app/globals.css`
- **Story text**: edit `app/components/LoveStory.tsx`
- **Account details**: edit `app/components/Registry.tsx`
- **Date / names**: edit `app/components/Hero.tsx` and `app/components/Footer.tsx`
