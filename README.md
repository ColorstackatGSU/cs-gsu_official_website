# ColorStack at Georgia State — Website

React + Vite + TypeScript + Tailwind CSS redesign of [colorstackatgsu.com](https://colorstackatgsu.com).

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (GSU brand palette in `tailwind.config.js`)
- React Router

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build
```

## Project layout

```
src/
  components/   # Navbar, Footer, Hero, SponsorStrip, FeatureColumns, StatsGrid, Testimonials, GetInvolved, ...
  pages/        # Home, About, Involvement, Students, Sponsors, BecomeAMember, NotFound
  data/         # eboard, sponsors, stats/testimonials (placeholder content)
public/images/  # static assets migrated from the previous static site
legacy/         # archived static HTML + CSS from the prior site
```

## Brand

Palette comes from GSU's official web color guidelines (https://commkit.gsu.edu/website-management/web-color-guidelines/) and lives under `theme.extend.colors.gsu` in `tailwind.config.js`. Primary is GSU Blue `#0039A6` + white; red `#CC0000` for accents/CTAs.

## Deploy

Targeting Vercel — the framework preset auto-detects Vite. No additional config required for an initial deployment.
