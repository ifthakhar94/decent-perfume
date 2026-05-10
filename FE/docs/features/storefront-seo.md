# Storefront SEO — Next.js App Router

SEO is a **first-class requirement** for the customer-facing storefront. Prefer the **Metadata API** (`export const metadata` / `generateMetadata`) on every public route, keep HTML **semantic**, and protect **Core Web Vitals** (they influence rankings).

## Site-wide configuration

| Item                             | Location             | Notes                                                                                                                                                                                                                                                |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`metadataBase`**               | `src/app/layout.tsx` | Built from **`NEXT_PUBLIC_SITE_URL`**, fallback `http://localhost:3000`. **In production, set `NEXT_PUBLIC_SITE_URL` to your canonical origin** (e.g. `https://www.example.com`) so Open Graph URLs, canonicals, and social cards resolve correctly. |
| **Default title**                | `src/app/layout.tsx` | `Decent Perfume` + template `%s · Decent Perfume`.                                                                                                                                                                                                   |
| **Default / global description** | `src/app/layout.tsx` | Retail-focused fallback; **override per route** when copy should differ.                                                                                                                                                                             |
| **`openGraph` defaults**         | `src/app/layout.tsx` | `type`, `locale`, `siteName` — extend per page (e.g. images).                                                                                                                                                                                        |
| **Document language**            | `src/app/layout.tsx` | `<html lang="en">`.                                                                                                                                                                                                                                  |

## Home page (`/`)

Implemented in **`src/app/(store)/page.tsx`**:

- Unique **`title`** and **`description`** (shared string for consistency).
- **`alternates.canonical`** → `/` (resolved to an absolute URL via `metadataBase`).
- **`openGraph`**: title, description, `url`.
- **`twitter`**: `summary_large_image`, title, description.

**Follow-up for stronger social previews:** add **`openGraph.images`** / **`twitter.images`** (e.g. 1200×630 asset under `public/`) when art direction is ready.

## On-page content and markup

- **Headings:** Home uses **`h2`** for “Shop by category”, “Featured fragrances”, and campaign titles inside the hero — keep **one clear topical hierarchy** per page as new sections are added.
- **`alt` text:** Hero and product **`next/image`** components use **descriptive `alt`** (slide title; product name + concentration). Category tiles use **title + teaser**. Do not leave `alt` empty for merchandising images unless the image is purely decorative and the same information is adjacent in text.
- **Internal links:** Use **`next/link`** with meaningful anchor text (product name, category name, not “click here”).
- **Mock imagery (Pexels):** Fine for development; production catalog should use **your assets** and **`alt`** aligned with product/category names.

## Checklist (as routes grow)

- [ ] **`app/sitemap.ts`** when URL set is stable.
- [ ] **`app/robots.ts`** if crawl rules differ from defaults.
- [ ] **JSON-LD** (`Organization`, `WebSite`; **`Product`** on PDPs) — validate with Google Rich Results Test.
- [ ] **Per-route metadata** for `/shop`, PDPs, `/journal`, etc.
- [ ] **Performance:** `next/image`, `priority` only on the LCP image; lazy-load below the fold.

## References

- [Next.js — Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js — openGraph](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)

## Related

- Home feature detail: **`client-storefront-home.md`**
- Header / IA: **`storefront-site-header.md`**
