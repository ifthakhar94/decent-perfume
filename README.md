# Decent Perfume

Monorepo layout: `FE/` (Next.js client), `BE/` (API — coming soon).

## Git: block broken pushes (frontend)

Hooks run **`npm run lint`** and **`npm run build`** in `FE/` before a push completes. If either fails, the push is aborted.

**From this repo root** (recommended), enable the shared hooks once per clone:

```bash
git config core.hooksPath .githooks
```

**If you only work inside `FE/`** as its own Git repo, `npm install` runs the `husky` `prepare` script; the same lint + build run via `.husky/pre-push`.

## CI

GitHub Actions (`.github/workflows/fe-ci.yml`) runs Prettier (`format:check`), ESLint, and build on pushes and pull requests when `FE/` or that workflow changes.

## Editor (Cursor / VS Code)

Open the repo root so `.vscode/` applies: **format on save** (Prettier), **ESLint** diagnostics (red squiggles), and **ESLint fix-all on save** for auto-fixable rules. Install the recommended extensions when prompted (Prettier + ESLint).
