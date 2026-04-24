# Web Services Website — Workspace Instructions

This workspace is a **professional web development services website** targeting European B2B clients.

## Project Context
- **Goal**: Sell web development/design services to clients in Europe (EU, UK, DACH, Nordics, Benelux).
- **Stack**: Vanilla HTML5, CSS3 (custom properties, grid, flexbox), minimal vanilla JS.
- **Language**: British English for all user-facing content.
- **Compliance**: GDPR cookie banner required; Impressum/Legal Notice page required (EU standard).

## File Structure Conventions
```
/
├── index.html              # Home page
├── pages/                  # Inner pages
│   ├── services.html
│   ├── portfolio.html
│   ├── about.html
│   ├── contact.html
│   └── legal/
│       ├── privacy-policy.html
│       └── impressum.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── sitemap.xml
└── robots.txt
```

## Code Standards
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- CSS custom properties for all colours, spacing, and typography (defined in `:root`).
- Mobile-first responsive design with breakpoints at 768px and 1200px.
- WCAG 2.1 AA minimum contrast.
- No external CSS/JS frameworks unless explicitly requested.
- All images must have descriptive `alt` attributes.

## Do Not
- Use jQuery or Bootstrap.
- Use inline styles.
- Hardcode colours — use CSS variables.
- Add tracking scripts (Google Analytics etc.) without user confirmation.
