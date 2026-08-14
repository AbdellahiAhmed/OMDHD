# OMDHD — Official Website

**Mauritanian Organization for Human Rights and Human Development**
المنظمة الموريتانية لحقوق الإنسان والتنمية الإنسانية

A premium, institutional, multilingual (Arabic · French · English) website built with a strong Mauritanian identity. Arabic RTL is treated as a first-class, native experience — not a mirrored afterthought.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | **Next.js 15** (App Router, RSC) |
| Language | **TypeScript** (strict) |
| Styling | **Tailwind CSS 3.4** + design tokens (CSS variables) |
| Components | **shadcn/ui-style** primitives + Radix UI |
| Animation | **Framer Motion** (scroll reveals, counters, parallax) |
| Icons | **Lucide React** |
| i18n | **next-intl** (`ar` default, `fr`, `en`) with full RTL |
| Fonts | **Tajawal** (Arabic) · **Inter** (Latin) via `next/font` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /ar
npm run build    # production build
npm start        # serve the production build
```

Routes are locale-prefixed: `/ar`, `/fr`, `/en`.

## Project structure

```
app/
  [locale]/
    layout.tsx           # root layout: fonts, dir/RTL, providers, metadata, JSON-LD
    page.tsx             # Home (12 sections)
    about | vision | mission | values
    intervention-areas/  # list + [slug] detail (static params)
    news/                # list (filterable) + [slug] detail
    reports | partners | gallery | contact | donate | volunteer
    not-found.tsx · loading.tsx
  sitemap.ts · robots.ts · manifest.ts
  globals.css            # tokens, RTL rules, organic utilities
components/
  ui/                    # button, card, input, textarea, label, badge, accordion, skeleton
  layout/                # header, footer, logo, language-switcher, mobile-nav
  shared/                # reveal, animated-counter, section-heading, smart-image,
                         # dune-divider, page-hero, area-card, news-card, icon, container
  sections/              # home + page sections (hero, welcome, impact, vmv, cta, forms…)
content/                 # CMS-ready data layer (see below)
i18n/                    # routing, request, navigation, middleware config
messages/                # ar.json · fr.json · en.json (UI strings)
lib/                     # utils (cn, formatters), fonts, seo helper
```

## Internationalization & RTL

- UI strings live in `messages/{ar,fr,en}.json`.
- `i18n/routing.ts` defines locales, the default (`ar`), and per-locale direction.
- The `<html dir>` attribute flips automatically; layouts use **logical properties**
  (`ms-`, `me-`, `inset-inline`, `ltr:`/`rtl:` variants) so the design mirrors cleanly.
- Arabic typography is tuned (line-height, font) for a native institutional feel.

## CMS-ready content layer

All dynamic content is typed and localized in `content/`:

- `intervention-areas.ts`, `news.ts`, `reports.ts`, `partners.ts`, `stats.ts`, `gallery.ts`
- Every translatable field uses `Localized<T> = Record<Locale, T>` — the exact shape a
  field-level-i18n CMS (e.g. **Sanity**) returns. To go live:
  1. Create matching Sanity schemas.
  2. Replace the static arrays with async fetchers returning the same types.
  3. Components stay untouched — they already consume `pick(field, locale)`.

## Images

Image URLs are centralized in `content/images.ts`. Every image is layered over a brand
gradient, so a missing remote asset still renders as an intentional composition.

**Hero photo:** drop the client's real photograph at `public/images/hero.jpg`, then set
`HERO.local = '/images/hero.jpg'` in `content/images.ts`.

## SEO & accessibility

- Per-page `generateMetadata` with canonical URLs + `hreflang` alternates (`lib/seo.ts`).
- Open Graph + Twitter cards; branded `public/og-image.svg`.
- `sitemap.ts`, `robots.ts`, `manifest.ts`, Organization **JSON-LD**.
- Semantic landmarks, skip-link, visible focus rings, labelled forms, `prefers-reduced-motion`.

## Brand tokens

| Token | Hex |
| --- | --- |
| Institutional blue | `#063B73` |
| Development green | `#1F8A4C` |
| Soft green | `#6BCB77` |
| Sand / gold | `#D9A441` |
| Off white | `#F8FAF7` |
| Dark text | `#102033` |
| Soft gray | `#E8EEF2` |

Defined as Tailwind colors **and** CSS variables in `app/globals.css`.

---

*Built to international-organization quality standards. Forms and the donation widget are
front-end demonstrations ready to be wired to your API / payment gateway.*
