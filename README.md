# Modern Portfolio Website

A Fontshare-inspired dark portfolio website built with Next.js, TypeScript, Tailwind CSS, Lenis, and GSAP. The project is frontend-only for v1: there are no API routes, no database calls, and no contact form backend.

The global font is Clash Display, self-hosted from `public/fonts/clash-display/ClashDisplay-Variable.woff2` and defined in `src/app/globals.css`.

## File Structure

```text
.
├── AGENTS.md
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── src
    ├── app
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── Experience.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── Navbar.tsx
    │   ├── ProjectCard.tsx
    │   ├── Projects.tsx
    │   ├── SectionHeading.tsx
    │   ├── Skills.tsx
    │   └── SmoothScrollProvider.tsx
    └── lib
        ├── portfolio.ts
        └── utils.ts
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

Validate the project:

```bash
npm run lint
npm run build
```

## Run with Docker

Docker Desktop is required.

Build and start the development container:

```bash
docker compose up --build
```

Open:

```text
http://localhost:8098
```

Stop the container:

```bash
docker compose down
```

If Docker ever serves stale styles or fonts, reset the anonymous dev volumes and rebuild:

```bash
docker compose down -v
docker compose up --build
```

The Docker setup is for development only. It runs the Next.js dev server inside the container and maps host port `8098` to container port `3000`.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Keep the default framework preset as **Next.js**.
5. Deploy.

No environment variables are required for v1 because the site does not use secrets, API keys, databases, or backend form handling.

## Replace Placeholder Content

Most portfolio content lives in:

```text
src/lib/portfolio.ts
```

Replace:

- `Your Name`
- `Frontend Developer`
- `your.email@example.com`
- `https://github.com/yourusername`
- `https://linkedin.com/in/yourusername`
- project names, descriptions, live demo links, and GitHub links
- skills, highlights, and timeline items

Also update metadata in:

```text
src/app/layout.tsx
```

The styling foundation is in:

```text
src/app/globals.css
```

Use `.env.local` only when you add real secrets or backend integrations later. Do not hardcode credentials in source files.
