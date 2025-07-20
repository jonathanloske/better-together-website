# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a German DJ service website built with Remix.js and deployed on Netlify. The site is for "Better Together" - a DJ service for Berlin and Brandenburg by Jonathan Loske and Vera Loske.

## Common Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server (localhost:3000)
netlify dev             # Start development with Netlify functions
```

### Building and Deployment
```bash
npm run build           # Build for production (includes image generation)
npm run start           # Serve locally in production mode (localhost:8888)
npm run typecheck       # Run TypeScript type checking
```

### Image Processing
```bash
npm run imgen           # Generate responsive images (smol/mid/big sizes)
```

### Netlify Deployment
```bash
netlify deploy --build          # Preview deployment
netlify deploy --build --prod   # Production deployment
```

## Architecture

### Tech Stack
- **Framework**: Remix.js with React 18
- **Styling**: Tailwind CSS with custom configurations
- **Deployment**: Netlify with Netlify Functions
- **Image Processing**: Sharp for automatic WebP generation
- **Type Safety**: TypeScript

### Key Directories
- `app/routes/` - Page routes (_index.tsx, about-us.tsx, contact.tsx, imprint.tsx)
- `app/components/` - Reusable components (Header, Footer, Image, icons)
- `app/styles/` - CSS files (Tailwind and custom root styles)
- `public/img/` - Source images with generated responsive variants in smol/mid/big subdirectories

### Image System
The project uses an automated image processing system:
- Source JPGs in `public/img/` are automatically converted to WebP
- Three sizes generated: smol (300px), mid (600px), big (1200px)
- Build process runs `imagescaler.js` to generate responsive images
- Custom `Image` component handles responsive loading

### Netlify Configuration
- Uses `@netlify/remix-adapter` for deployment
- Redirects managed via `.redirects` file (enabled/disabled via npm scripts)
- Caching headers configured for static assets in `netlify.toml`
- Build command automatically generates images and enables redirects

### Styling Notes
- German language content throughout
- Uses Nunito Sans font from Google Fonts
- Custom hero background image configured in Tailwind
- Black theme with white text
- Comprehensive OpenGraph meta tags for social sharing

### Development Workflow
1. Run `npm run dev` for development with hot reload
2. Images are processed during build, not in dev mode
3. Use `npm run typecheck` to verify TypeScript
4. Redirects are disabled in dev mode for proper local routing