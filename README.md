# Muhammad Taimoor Jham — Developer Portfolio

A premium, modern, recruiter-ready portfolio website for Muhammad Taimoor Jham, Full Stack Developer (MERN Stack).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Email | Resend API (serverless) |
| Deployment | Vercel |

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   └── SocialLinks.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts        ← all CV content lives here
├── lib/
│   ├── animations.tsx      ← Framer Motion variants & utilities
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css               ← design tokens & global styles

api/
└── contact.ts              ← Vercel serverless function (Resend)

public/
├── favicon.svg
└── resume.pdf              ← ⚠️ Place your CV PDF here
```

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Email address to receive contact form submissions |

> **Never commit `.env.local` or expose `RESEND_API_KEY` in frontend code.**

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deployment (Vercel)

1. Push project to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy — Vercel auto-detects Vite + serverless functions

## Resend Contact Form Setup

1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain (or use `@resend.dev` for testing)
3. Create an API key
4. Add `RESEND_API_KEY` to Vercel environment variables
5. The `api/contact.ts` serverless function handles form submissions securely

## Resume

Place your CV PDF at `public/resume.pdf`. The "Download Resume" button will serve it automatically.

## Updating Content

All portfolio content (experience, skills, projects, education, contact info) is centralized in:

```
src/data/portfolio.ts
```

Update this single file to change any content across the entire site.

## Design System

CSS design tokens are defined in `src/index.css`:
- **Accent color**: `--color-accent: #7b6af0` (violet-blue)
- **Background**: `--color-bg: #0a0a0f`
- **Font**: Inter (Google Fonts)

To change the accent color, update only `--color-accent` and `--color-accent-hover`.
