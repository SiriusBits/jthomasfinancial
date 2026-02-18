# AGENTS.md

Guidance for AI/code agents working in this repository.

## Project Overview

- Stack: Astro 5 + TypeScript + Tailwind CSS v4.
- Site type: static, content-driven marketing site for J Thomas Financial.
- Deployment target: Netlify (`netlify.toml`), Node 20.
- Primary directories:
  - `src/pages`: route files.
  - `src/components`: layout, sections, ui primitives.
  - `src/content`: MDX page/service content.
  - `src/data`: typed data (`services.ts`, `siteMetadata.ts`).
  - `src/styles`: theme tokens and typography.
  - `public/assets`: publicly served static assets.
  - `reference/brand-assets`: source brand files used by brand download route.

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Preview build: `pnpm preview`

Always run `pnpm build` after substantive edits.

## Netlify CLI Deployment

- First-time login: `npx netlify login`
- Optional first-time site creation (if not already linked): `pnpm run netlify:create-site`
- Link local repo to an existing Netlify site: `npx netlify link`
- Build and test locally before deploy: `pnpm build`
- Draft deploy (recommended for verification): `npx netlify deploy`
- Production deploy: `pnpm run deploy`

Notes:
- `netlify.toml` defines the build command (`pnpm run build`) and publish directory (`dist`).
- Prefer draft deploys first for content/design checks, then promote with production deploy.

## Architecture and Conventions

- Use `@/*` imports for source files (configured in `tsconfig.json`).
- Keep layout shell in `src/components/layout/BaseLayout.astro`.
- Keep icons centralized in `src/icons/lucide-icons.ts` and import from there.
- Keep reusable visual primitives in `src/components/ui`.
- Keep page body copy in MDX where possible (`src/content/*.mdx`, `src/content/services/*.mdx`).
- Keep site-wide constants in `src/data/*`.
- Use existing Tailwind tokens from `src/styles/global.css` (`navy`, `gold`, slate/neutral scales, heading/body fonts).

## Content Model Rules

- `src/content.config.ts` defines two collections:
  - `pages` from `src/content/*.mdx`
  - `services` from `src/content/services/**/*.mdx`
- Service slugs must stay in sync across:
  - `src/data/services.ts` (`slug` and `id`)
  - service MDX entry filenames
  - `src/pages/services/[...slug].astro` redirect slug list
- If adding a new service, update all three places.

## Brand and Design Guardrails

- Brand palette:
  - Navy: `#0B2238` (primary)
  - Gold: `#C7A24D` (accent)
  - Optional support: `#2A3B4C`, `#EDEBE7`
- Typography:
  - Headings: Montserrat
  - Body: Inter
- Logo usage:
  - Do not distort, stretch, skew, or recolor outside approved palette.
  - Do not add decorative effects (drop shadows, bevels, glows) in production UI.
  - Preserve clear space and strong contrast.

## Brand Assets System

- Public previews/download helpers live under:
  - `public/assets/brand/*`
  - `src/pages/brand.astro`
- Canonical downloadable source files are exposed via:
  - `src/pages/downloads/brand/[file].ts`
  - Source directory: `reference/brand-assets`
- When adding/removing brand files, keep both:
  - `allowedFiles` list in `[file].ts`
  - UI links on `src/pages/brand.astro`
  in sync.

## Editing Guidelines

- Prefer small, focused changes over broad refactors.
- Match existing style in touched files (Astro + TS frontmatter + Tailwind utilities).
- Preserve accessibility patterns:
  - semantic headings,
  - alt text for meaningful images,
  - keyboard/focus-visible states,
  - sufficient color contrast.
- Avoid introducing new dependencies unless necessary.
- Do not edit generated output (`dist/`, `.astro/`) directly.

## Verification Checklist (Before Hand-off)

- Project builds successfully with `pnpm build`.
- New/changed routes render without runtime errors.
- Navigation and footer links remain valid.
- Brand page/download links resolve correctly if touched.
- No obvious regressions in typography, spacing, or color usage.
