# Lee Ming — Next.js Portfolio

A responsive personal portfolio built using Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

## Customize

- Profile, featured projects, and career timeline: `src/components/portfolio.tsx`
- Page styles: `src/app/globals.css`
- Browser metadata: `src/app/layout.tsx`

### Before publishing

1. Replace illustrative project visuals with genuine screenshots if available.
2. Add confirmed tools/technologies for each project. Project descriptions currently avoid guessing your stack.
3. Replace the placeholder contact rows with your email, GitHub, and LinkedIn links.
4. Consider attaching repositories, demos, and outcomes/case studies.
5. The source file documents a career spanning 2017–2025 (8 calendar years). The page uses a start year rather than a potentially inconsistent "5 years of experience" claim.

## Background sourcing

Career and education details are adapted from `LeeMing.txt` supplied by Lee Ming. EShop and AI-agent project descriptions are adapted from Lee Ming's conversation; product visuals are illustrative and not screenshots.

## Dark developer edition

This version uses a dark terminal-inspired palette with teal accents. The original content and project mockups are retained, while the navigation, hero, project showcase, experience and contact sections have been restyled.

For Windows development, `npm run dev` now starts Next.js with **Webpack**, avoiding the Turbopack issue observed locally. To test Turbopack later, run `npx next dev --turbopack`.
