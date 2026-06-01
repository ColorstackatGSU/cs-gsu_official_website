# ColorStack at Georgia State University Website

This repository contains the official website for **ColorStack at GSU**.

ColorStack at GSU is a student chapter focused on building community, support, and career momentum for Black and Latinx computer science students at Georgia State University. Our chapter hosts events, shares opportunities, and helps students grow academically and professionally in tech.

## About ColorStack

ColorStack is a national organization whose mission is to increase the number of Black and Latinx computer science graduates entering rewarding technical careers.

- National website: [colorstack.com](https://colorstack.com)
- National platform: [colorstack.org](https://www.colorstack.org)

This site represents the local GSU chapter and connects students, partners, and supporters with what we are doing on campus.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint     # eslint
npm run build    # type-check + production build -> dist/
npm run preview  # serve the production build
```

## Project layout

```
src/
  components/   # shared UI components
  pages/        # route-level pages
  data/         # chapter content/data
public/images/  # static assets
legacy/         # archived legacy site assets
```

## License

Released under the [MIT License](LICENSE).
