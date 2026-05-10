# Feature context — Merchant dashboard (coming soon)

## Route

- **URL**: `/dashboard`
- **Audience**: Operators, inventory managers, and admins selling through Decent Perfume.

## Current scope

**Design:** All dashboard UI will follow **Glassmorphism** app-wide; see `design-system-glassmorphism.md`.

The dashboard area is a **coming soon** variant of the same shell:

- Section label “Dashboard” and merchant-oriented headline/subtitle from **RTK Query** (`getDashboardComingSoonCopy`).
- Link back to the **storefront teaser** at `/` for quick navigation during development.

## Data / state

- Shares the same `baseApi` slice as the storefront; section argument selects copy.
- Redux store is ready for future slices: `auth`, `orders`, `inventory`, `analytics`, etc.

## Planned evolution (not implemented)

- Auth-gated layout (session, roles).
- Order pipeline, stock movements, promotions, reporting.
- Possibly a separate subdomain or path prefix in production; for now the app uses `/dashboard` under the same Next deployment.

## Related files

- Page entry: `src/app/dashboard/page.tsx`
- UI: `src/components/coming-soon/ComingSoonPage.tsx`
- Design notes: `docs/features/design-system-glassmorphism.md`
