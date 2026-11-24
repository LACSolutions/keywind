# keywind

Source of the Amora Keycloak login theme: FreeMarker templates plus TypeScript, Tailwind CSS 3 and Alpine.js, built with Vite. Fork of upstream keywind. Base branch: `master` on `origin` (LACSolutions); never push or open PRs to the `upstream` remote.

## Commands

Package manager: `pnpm`, with `pnpm-lock.yaml`. A tracked `package-lock.json` (from a 2024 npm install) disagrees with it; never run npm or edit that file. Removing it is a separate decision.

| Command | What it does |
|---------|--------------|
| `pnpm install` | Install dependencies |
| `pnpm build` | `tsc` then `vite build`; writes assets to `theme/amora/login/resources/dist/` (tracked) |
| `pnpm test` | Runs `mvn test` (needs Java and Maven): renders every `.ftl` page to `html/login/*.html` (tracked previews) |
| `pnpm dev` | Vite dev server on port 5173; the `html/login/*.html` previews load CSS from it |
| `pnpm build:jar` | Zips `META-INF/` and `theme/` into `out/keywind.jar` (gitignored). Not used by the keycloak repo |

Before pushing: `pnpm build` and `pnpm test`, and commit the regenerated `resources/dist/` and `html/login/` files with the source change. There is no CI.

## Layout

- `theme/amora/login/`: FreeMarker templates and `theme.properties`. Template variables come from Keycloak; check the Keycloak docs for the version in the keycloak repo's Dockerfile.
- `src/`: TypeScript entry points and `index.css`; `src/test/java/`: the template render test.
- Tailwind `content` scans `./theme/**/*.ftl` only. A class built from strings in TypeScript is not generated unless it also appears in a template.
- Interactivity is Alpine.js only; do not add React or other frameworks.

## Shipping a change

The keycloak repo holds an unpacked copy of `theme/amora/`. After `pnpm build`, copy `theme/amora/` over the keycloak repo's `keycloak/themes/amora/` and open a PR there. The new image applies after a stack pulls it and Keycloak restarts.

## Verify before acting

- Compare with the keycloak copy before assuming they match: `diff -rq theme/amora ../keycloak/keycloak/themes/amora`.
- Read versions from `package.json` and `pnpm-lock.yaml`, not from docs.
