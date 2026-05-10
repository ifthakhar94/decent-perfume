# Feature context — Client storefront (coming soon)

## Route

- **URL**: `/` (root of the Next.js app in `FE`)
- **Audience**: Shoppers discovering and buying perfume.

## Layout

Storefront routes live under the **`(store)` route group** with `StorefrontShell`: shared **site header** (logo, nav, search, cart, account, login/register) and scene background. See `storefront-site-header.md`.

## Current scope

**Design:** All storefront UI follows **Glassmorphism**; see `design-system-glassmorphism.md`.

The home route is still a **coming soon** hero, embedded under the shared header:

- Copy from **RTK Query** (`getComingSoonCopy` with section `"store"`).
- **Dashboard** is out of scope for this shell; merchant UI remains at `/dashboard` without the storefront header.

## Data / state

- **RTK + RTK Query**: `src/lib/api/baseApi.ts` — `getComingSoonCopy` returns static copy today; later this can point at a CMS or API slice without changing page structure.
- **Redux store**: `src/lib/store.ts` — `baseApi` middleware is wired for future endpoints (catalog, cart, auth).

## Planned evolution (not implemented)

- Nav targets in `STORE_MAIN_NAV` (`/shop`, `/new`, etc.) resolve to real pages.
- Product listing / PDP, cart, checkout, auth pages (`/login`, `/register`, …).
- SEO metadata per page; Open Graph for product shares.
- Integration with `BE` once APIs exist; replace `fakeBaseQuery` usage with `fetchBaseQuery` to the backend origin.

## Related files

- Layout: `src/app/(store)/layout.tsx`
- Page: `src/app/(store)/page.tsx`
- UI: `src/components/coming-soon/ComingSoonPage.tsx` (`section="store"`, `variant="embedded"`)
- Header: `src/components/storefront/site-header/site-header.tsx`
- Design notes: `docs/features/design-system-glassmorphism.md`, `docs/features/storefront-site-header.md`
