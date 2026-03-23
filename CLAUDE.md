# keywind

Custom Keycloak login theme. TypeScript + Vite + Tailwind CSS + Alpine.js + FreeMarker templates.

## Quick Reference

- **Install:** `pnpm install`
- **Dev server:** `pnpm dev`
- **Build assets:** `pnpm build`
- **Build JAR (for Keycloak):** `pnpm build:jar`
- **Package manager:** `pnpm` — not yarn or npm

## Structure

- `theme/` — FreeMarker templates (`.ftl`) for each Keycloak page
- `src/` — TypeScript + Tailwind CSS source
- `dist/` — Build output (static assets)
- Build output is packaged as a JAR for deployment into Keycloak's `themes/` folder

## Key Constraints

- FreeMarker templates use Keycloak's template variables — refer to Keycloak docs for available context
- Tailwind CSS is compiled into the theme — keep class names consistent with Tailwind purge config
- Alpine.js handles interactive UI (dropdowns, toggles) — no React or other heavy frameworks
- Built JAR is deployed by copying to `keycloak/themes/` in the `keycloak` repo
- Theme changes require a Keycloak restart to take effect (unless hot-reload is configured in dev)
- Keycloak version compatibility: built for Keycloak 26.x
