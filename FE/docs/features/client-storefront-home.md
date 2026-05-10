# Feature context — Client storefront home

## Route

- **URL**: `/` (root of the Next.js app in `FE`)
- **Audience**: Shoppers discovering and buying perfume.

## Layout

Storefront routes live under the **`(store)` route group** with `StorefrontShell`: shared **site header** and scene background. See `storefront-site-header.md`.

## Current scope

**Design:** Glassmorphism; see `design-system-glassmorphism.md`.

The home route uses **`StoreHomeHero`**: a **full-width [Swiper](https://swiperjs.com/)** carousel (`StoreHomeCarousel`) — fade transitions, loop, autoplay (pauses on hover), keyboard + grab cursor, **Hugeicons prev/next** (no button chrome), and **dynamic pagination**. Each slide uses a background image, gradient scrim (`from-black/75`), and white typography + glass CTA. Slide data is **mocked with `@faker-js/faker`** in `src/lib/mocks/hero-carousel-slides.ts` (seeded); hero photos are a **shuffled pool of perfume- and boutique-themed Unsplash URLs** (Faker no longer offers category-tagged placeholder photos). The carousel renders them with **`next/image`** (`priority` on the first slide, lazy for the rest) so the browser gets **optimized formats and sizing** instead of full-size remote JPEGs. A slim **Sign in** strip sits below the carousel.

## Data / state

- **Redux / RTK Query**: `src/lib/api/baseApi.ts` — storefront home is static for now; API slice holds **`getDashboardComingSoonCopy`** for `/dashboard` only. Extend with catalog, cart, and CMS endpoints as the `BE` is built.

## Planned evolution

- Implement `/shop`, `/new`, and other `STORE_MAIN_NAV` targets.
- PDP, cart, checkout, auth.
- SEO / Open Graph per page.

## Related files

- Layout: `src/app/(store)/layout.tsx`
- Page: `src/app/(store)/page.tsx`
- Hero: `src/components/storefront/store-home-hero.tsx`, `store-home-carousel.tsx`
- Mock slides: `src/lib/mocks/hero-carousel-slides.ts`
- Header: `src/components/storefront/site-header/site-header.tsx`
- Design: `design-system-glassmorphism.md`, `storefront-site-header.md`
