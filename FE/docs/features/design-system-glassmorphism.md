# Design system — Glassmorphism & perfume palette

## Application-wide standard

**Every surface in this frontend** — storefront, `/dashboard`, auth, settings, modals, tables, and marketing blocks — **must follow Glassmorphism** as defined here and in `AntdThemeProvider`. Do not introduce flat opaque cards, Neubrutalist hard shadows, or heavy black keylines as the default; extend the existing frosted-panel language (blur + translucent fills + light borders + soft tinted shadows). When adding new routes or components, reuse established patterns and the **luxury fragrance palette** below (not bright violet-forward gradients).

## Brand direction

Decent Perfume is a **perfume e‑commerce** product. The UI should feel **luminous, soft, and premium** — frosted panels over warm, editorial grounds. Luxury fragrance and beauty retail commonly lean on **metallic gold/bronze accents**, **deep wine or burgundy** for gravitas, **cream and blush** backgrounds, and **warm ink** typography — a more credible fit than dominant electric purple, which reads generic SaaS.

### Research notes (condensed)

- Industry guidance for **luxury / perfume ecommerce** stresses **elegant, minimal** presentation, **metallic tones (gold)** for opulence, and **deep burgundy** for stability and longevity.
- **High contrast black–white** can work; we use **warm near-black (ink)** on **cream/blush** for softer glass stacks.
- Sources: luxury palette roundups (e.g. burgundy + gold + neutrals), fragrance store UX articles emphasizing premium, restrained chrome.

## Glassmorphism (how we apply it)

- **Frosted layers**: `backdrop-blur-xl` / `backdrop-blur-2xl` on panels so background color and orbs read through subtly.
- **Translucent fills**: `bg-white/20`–`bg-white/35` (or similar) instead of opaque cards; depth comes from **stacking** blur + opacity.
- **Light rims**: `border border-white/50`–`white/60` — thin, luminous edges (not heavy ink strokes).
- **Soft depth**: `shadow-xl` / `shadow-2xl` with **wine-tinted** shadows (`shadow-rose-950/10`–`/15`), not neon glows.
- **Rounded glass**: `rounded-2xl`–`rounded-3xl` on primary surfaces; pills for small chips (`rounded-full`).
- **Background interest**: multi-stop **gradients** plus **blurred orbs** (`blur-3xl`) in **rose / amber / deep wine mist** so glass has something to “refract.”
- **Type**: Syne stays the display sans; use **tracking** and weight for hierarchy.

## Color vocabulary

### CSS semantic tokens (`globals.css` → Tailwind)

| Token                | Role           | Typical use                        |
| -------------------- | -------------- | ---------------------------------- |
| `perfume-ink`        | Primary text   | Headlines, icons-on-glass default  |
| `perfume-ink-muted`  | Secondary text | Labels, captions                   |
| `perfume-body`       | Body copy      | Longer paragraph text              |
| `perfume-wine`       | Brand / CTA    | Primary buttons, badges, logo mark |
| `perfume-wine-hover` | Hover          | Primary button hover               |
| `perfume-gold`       | Accent         | Search icon, subtle metallic hints |
| `perfume-gold-light` | Highlight      | Optional emphasis                  |

Use utilities: `text-perfume-ink`, `bg-perfume-wine`, `text-perfume-gold`, etc.

### Tailwind scales (when not using tokens)

| Role           | Suggested utilities                                                | Notes                  |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| Scene gradient | `from-stone-100/95`, `via-rose-100/80`, `to-amber-50/90`           | Boutique daylight      |
| Glass surface  | `bg-white/25`, `border-white/55`, `ring-white/40`                  | Cards + header strip   |
| Depth accents  | `bg-rose-500/25`, `bg-amber-400/35`, `bg-rose-900/15` + `blur-3xl` | Wine + champagne pools |
| Primary CTA    | `bg-perfume-wine/95`, `shadow-rose-950/25`                         | Wine glass button      |
| Secondary CTA  | `bg-white/35`, `border-white/60`                                   | Ghost-glass            |

Ant Design tokens in `AntdThemeProvider` use **wine** primary (`#6b2f3c`), **bronze gold** info (`#8a6240`), and **cream** base — aligned with the CSS tokens above.

## Anti-patterns

- Dominant **electric violet / fuchsia** fields (conflicts with “luxury niche fragrance” positioning).
- Opaque white cards with no blur on a busy gradient (reads as pasted boxes).
- `backdrop-blur` without a semi-transparent fill (blur won’t read correctly).
- Harsh pure-black borders on every glass panel.

## References in code

- Tokens + body wash: `src/app/globals.css`
- Scene orbs: `src/components/storefront/store-scene-background.tsx`
- Glass surfaces: `src/components/storefront/store-home-hero.tsx`, `store-home-carousel.tsx` (hero scrim + CTA), `src/components/coming-soon/ComingSoonPage.tsx` (dashboard), `src/components/storefront/site-header/site-header.tsx`
- Ant Design theme: `src/components/providers/AntdThemeProvider.tsx`
