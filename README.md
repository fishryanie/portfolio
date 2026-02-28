# Portfolio Website (Next.js)

Personal portfolio website for **Phan Hong Quan**, focused on recruiter-friendly project presentation:
- grouped projects by company
- rich screenshot galleries with modal preview
- single QR/link per project
- downloadable CV assets (PDF/DOCX/TXT)
- bilingual UI with `next-intl` (Vietnamese / English)
- mobile-friendly UI + PWA support

Live site:
- [cv-dev-portfolio.vercel.app](https://cv-dev-portfolio.vercel.app)

## Tech Stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide icons
- qrcode.react
- next-intl

## Local Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
Language routes:
- Vietnamese (default): `/`
- English: `/en`

## Scripts
- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `./build-cv-pdf.sh` - rebuild CV PDF files from HTML source (if needed)

## Content Management
Main content files:
- `src/data/projects.json` - project-level details (title, responsibilities, features, team size, base links)
- `src/data/portfolio.ts` - profile info, company grouping, project metadata (cover images, gallery, extra notes)

Image assets:
- `public/images/*` - project screenshots and cover visuals
- `public/projects/*` - legacy/static project art (if still referenced)

CV assets:
- `public/cv/*`

## Build Verification
```bash
npm run lint
npm run build
```

## Deployment
Recommended: Vercel (Next.js native).

Any static/public update (images, CV files, manifest icons) is included automatically in build output.
