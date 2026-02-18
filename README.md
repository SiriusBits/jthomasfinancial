# J Thomas Financial Website

Static marketing site built with Astro, TypeScript, and Tailwind CSS.

## Commands

Run from the project root:

| Command | Action |
| :------ | :----- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local development server |
| `pnpm build` | Build production site into `dist/` |
| `pnpm preview` | Preview built site locally |
| `pnpm deploy` | Deploy to Netlify production |

## Netlify CLI Deployment

1. Login once:
   - `npx netlify login`
2. Link this local repo to the target Netlify site (first time per machine/repo):
   - `npx netlify link`
3. Build locally:
   - `pnpm build`
4. Create a draft deploy for review:
   - `npx netlify deploy`
5. Deploy to production:
   - `pnpm deploy`

### First-Time Site Creation (Optional)

If a Netlify site has not yet been created for this project:

- `pnpm run netlify:create-site`

Then run `npx netlify link` and continue with the normal deploy flow above.

## Notes

- Netlify build settings are defined in `netlify.toml`.
- Build command: `pnpm run build`
- Publish directory: `dist`
