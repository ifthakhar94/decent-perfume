# Feature context — Storefront site header

## Scope

Global chrome for the **customer-facing** app only. `SiteHeader` and **`StorefrontFooter`** live in `StorefrontShell`, which wraps the `(store)` route group. **`/dashboard` does not use this shell** (merchant area is separate).

## UX / IA

Two header bands:

1. **Top row** — **Logo** (home), **search** (desktop inline; mobile full-width strip below), **cart** (`Badge` → `/cart`), **account** menu, **social icons** grouped in a **frosted pill** (separate visual block) from `src/config/social-links.ts`. Icons use **[Hugeicons](https://hugeicons.com/)** (`@hugeicons/react` + `@hugeicons/core-free-icons`) via `HugeIcon` in `src/components/ui/huge-icon.tsx`.
2. **Second row** — **Primary nav** (`STORE_MAIN_NAV`, `lg+` horizontal) + **hamburger** (below `lg`, opens `Drawer`) on the left; **Log in** / **Register** on the right (all breakpoints, compact on small screens).

Details:

- **Primary nav** — config-driven from `src/config/store-navigation.ts`. Mobile: same links inside the drawer (plus auth).
- **Search** — Ant Design `Input` (`type="search"`) in `<form role="search">`; submit reserved for catalog search later.
- **Account** — `Dropdown` (account, orders, wishlist; sign-out disabled until auth).

## Structure (code)

| Piece                           | Role                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| `storefront-shell.tsx`          | Scene background + `SiteHeader` + `<main id="main-content">` + `StorefrontFooter`. |
| `storefront-footer.tsx`         | Glass footer: brand, `STORE_MAIN_NAV`, account links, cart CTA, social, copyright. |
| `store-scene-background.tsx`    | Fixed gradient + orbs (glass refracts over this).                                  |
| `site-header/site-header.tsx`   | Client component: two-row layout, drawer, menus.                                   |
| `site-header/header-social.tsx` | Glass-style external social icon links.                                            |
| `config/social-links.ts`        | Social URLs + icons (replace with real brand links).                               |
| `lib/routes/store.ts`           | Central path constants for storefront links.                                       |

## Accessibility

- Skip link targets `#main-content`.
- Nav landmarks: `aria-label="Primary"` (desktop + mobile).
- Icon-only controls include `aria-label` (cart, account menu, open menu).

## Related

- Design: `design-system-glassmorphism.md`
- Home / future store routes: `src/app/(store)/`
