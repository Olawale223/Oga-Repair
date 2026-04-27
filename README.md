# Oga Repair Web App

Production-ready React web application built with Next.js, Tailwind CSS, and Framer Motion from the provided Oga Repair design screens.

## Stack

- Next.js App Router with JavaScript
- Tailwind CSS for design tokens and styling
- Framer Motion for page and section transitions
- Lucide React for iconography

## Project Structure

```text
app/
  (auth)/
    login/page.js
    signup/page.js
  (main)/
    about/page.js
    jobs/page.js
    jobs/[slug]/page.js
    layout.js
    page.js
  layout.js
  not-found.js
assets/
  icons/
  images/
components/
  layout/
  pages/
  ui/
data/
hooks/
styles/
utils/
```

## Included Pages

- `/` home landing page
- `/login` login screen
- `/signup` signup screen
- `/jobs` jobs discovery page
- `/jobs/[slug]` job details page
- `/about` about page

## Design Notes

- Shared colors, radius, shadow, and type scale live in [styles/theme.mjs](./styles/theme.mjs).
- Tailwind consumes those tokens in [tailwind.config.mjs](./tailwind.config.mjs).
- Image assets were cropped from the provided source PNG screens and saved under [assets/images](./assets/images).
- Layout chrome and repeated UI patterns are componentized under [components/layout](./components/layout) and [components/ui](./components/ui).

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run build
npm run lint
```

The default local preview URL is `http://localhost:3000`.
