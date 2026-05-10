<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Decent Perfume — UI (mandatory)

- **Glassmorphism everywhere**: all new UI in this app (storefront and dashboard) uses frosted panels (`backdrop-blur-*`), translucent `bg-white/…` (or tinted) fills, light `border-white/…` rims, **wine/rose-tinted** soft shadows, and rounded glass radii — not flat white boxes or brutalist offset shadows.
- **Source of truth**: `docs/features/design-system-glassmorphism.md` and `src/components/providers/AntdThemeProvider.tsx`. Reference `src/components/storefront/store-home-hero.tsx` and `site-header` for storefront composition; `ComingSoonPage` is dashboard-only.
- **Icons**: Prefer **[Hugeicons](https://hugeicons.com/)** — `HugeIcon` in `src/components/ui/huge-icon.tsx` with icons from `@hugeicons/core-free-icons` (tree-shakeable). Do not add `@ant-design/icons` for new UI unless an Ant Design primitive leaves no alternative.
- **Pre-push**: Husky runs `npm run lint` and `npm run build` before `git push` from this package; fix failures before pushing.
- **SEO (storefront)**: Follow **`docs/features/storefront-seo.md`**. Use **`metadata` / `generateMetadata`** on every public route; set **`NEXT_PUBLIC_SITE_URL`** in production for **`metadataBase`** and correct OG/Twitter URLs. Use **semantic headings**, **`next/link`** for internal URLs, and **descriptive `alt`** on hero, category, and product images (see home components).
