# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

German DJ service website for "Better Together" (Berlin and Brandenburg) by Jonathan Loske and Vera Loske. Built with React Router (formerly Remix) v7 and deployed on Netlify as a static site.

## Common Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server (localhost:3000)
netlify dev             # Start development with Netlify functions (localhost:8888)
npm run typecheck       # Run TypeScript type checking
```

### Building and Deployment
```bash
npm run build           # Build for production (includes image generation)
npm run start           # Serve locally in production mode (localhost:8888)
npm run imgen           # Generate responsive images (smol/mid/big sizes)
```

### Netlify Deployment
```bash
netlify deploy --build          # Preview deployment
netlify deploy --build --prod   # Production deployment
```

## Architecture

### Tech Stack
- **Framework**: React Router v7 (migrated from Remix)
- **Rendering**: Static Site Generation (SSG) - no SSR
- **Styling**: Tailwind CSS + PostCSS
- **Fonts**: Self-hosted Nunito Sans via @fontsource
- **Video**: lite-youtube-embed for performance
- **Image Processing**: Sharp for automatic WebP generation
- **Deployment**: Netlify
- **Type Safety**: TypeScript

### Static Site Generation (SSG)
The site uses pure SSG with no server-side rendering:
- Configured in `react-router.config.ts` with `ssr: false`
- All routes prerendered at build time: `/`, `/about-us`, `/contact`, `/imprint`
- Routes defined in `app/routes/`: `_index.tsx`, `about-us.tsx`, `contact.tsx`, `imprint.tsx`
- Build output goes to `build/client` (configured in `netlify.toml`)

### Image System
Automated responsive image generation via `imagescaler.js`:
- Source: JPGs in `public/img/`
- Output: WebP format in three sizes
  - `smol/`: 300px width
  - `mid/`: 600px width
  - `big/`: 1200px width
- Runs automatically during `npm run build`
- Custom `Image` component in `app/components/Image.tsx` handles responsive loading

### Layout and Components
- `app/root.tsx`: Root layout with Header, Footer, meta tags, fonts
- `app/components/Header.tsx`: Navigation header
- `app/components/Footer.tsx`: Site footer
- `app/components/Image.tsx`: Responsive image component
- `app/components/LiteYouTube.tsx`: Lazy-loaded YouTube embed

### Styling
- German language content (locale: de_DE)
- Self-hosted Nunito Sans (400, 700 weights)
- Black background theme
- Comprehensive OpenGraph meta tags in `root.tsx`
- Tailwind config in `tailwind.config.ts`
- Additional styles in `app/styles/root.css`

### Node Version
Requires Node.js >= 20.0.0 (specified in `package.json` engines)