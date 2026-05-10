# Feature context — Client storefront home

## Route

- **URL**: `/` (root of the Next.js app in `FE`)
- **Audience**: Shoppers discovering and buying perfume.

## Layout

Storefront routes live under the **`(store)` route group** with `StorefrontShell`: shared **site header** and scene background. See `storefront-site-header.md`.

## Page composition (`StoreHomeHero`)

**Design:** Glassmorphism — `design-system-glassmorphism.md`.

### 1. Hero carousel (`StoreHomeCarousel`)

- Full-width **[Swiper](https://swiperjs.com/)**: fade, loop, autoplay (pause on hover), keyboard + grab cursor, **Hugeicons** prev/next, dynamic pagination.
- Gradient scrim, white typography, glass CTA per slide.
- **Data:** `src/lib/mocks/hero-carousel-slides.ts` (`@faker-js/faker`, seeded).
- **Images:** **Pexels** URLs from `PERFUME_HERO_PEXELS_POOL` in `src/lib/mocks/perfume-placeholder-images.ts` (not Unsplash-only; `next.config.ts` allows `images.pexels.com` and `images.unsplash.com`).
- **Delivery:** `next/image` with `priority` on the first slide; **`alt`** includes the slide headline for SEO and accessibility.

### 2. Category carousel (`StoreHomeCategoryCarousel`)

- **[Ant Design `Carousel`](https://ant.design/components/carousel)** (react-slick) between hero and products — responsive **`slidesToShow`** (2 on narrow / iPhone SE widths up to 5 on wide), dots, **`infinite: false`**, swipe/drag. Pexels thumbnails from **`CATEGORY_CAROUSEL_PEXELS_POOL`**.
- **Data:** `src/lib/mocks/storefront-category-carousel.ts` — fixed category titles/teasers; Faker shuffles images and generates ids (seeded). Links: **`/shop?category={slug}`** via `storeRoutes.shop`.
- **Navigation:** Custom **Hugeicons** prev/next (hidden `<md` via CSS; touch swipe on phones). Styling: `globals.css` (`.category-ant-carousel`, `.category-ant-arrow`).
- **SEO:** Section **`h2`** (“Shop by category”); images use descriptive **`alt`**.

### 3. Featured products (`StoreHomeProducts`)

- Responsive grid; mocks in `src/lib/mocks/storefront-products.ts`; images from **`PERFUME_PRODUCT_PEXELS_POOL`**.
- **Show more** → `storeRoutes.shop`.
- Product images: **`alt`** = name + concentration.

### 4. Sign-in strip

- Links to **`storeRoutes.login`**.

## SEO (critical)

- **Home metadata** (title, description, **canonical**, **Open Graph**, **Twitter card**) is in **`src/app/(store)/page.tsx`**, resolved with **`metadataBase`** from **`src/app/layout.tsx`** (`NEXT_PUBLIC_SITE_URL`).
- **Convention and checklist:** **`storefront-seo.md`**.

## Data / state

- **Redux / RTK Query:** `src/lib/api/baseApi.ts` — home is static; slice currently emphasizes dashboard copy. Extend for catalog/CMS as `BE` grows.

## Planned evolution

- Real **`/shop`** (including `?category=` handling), PDP, cart, checkout, auth.
- **`sitemap.ts`**, **`robots.ts`**, JSON-LD.
- **`openGraph.images`** for branded share cards.

## Related files

- Root SEO defaults: `src/app/layout.tsx`
- Home metadata: `src/app/(store)/page.tsx`
- Shell: `src/app/(store)/layout.tsx`
- Components: `store-home-hero.tsx`, `store-home-carousel.tsx`, `store-home-category-carousel.tsx`, `store-home-products.tsx`
- Mocks: `hero-carousel-slides.ts`, `storefront-category-carousel.ts`, `storefront-products.ts`, `perfume-placeholder-images.ts`
- Routes: `src/lib/routes/store.ts`
- Header: `site-header/site-header.tsx`
- Docs: **`storefront-seo.md`**, `design-system-glassmorphism.md`, `storefront-site-header.md`
