# T. Handan Akyuz — Learning Experience Designer Portfolio

A minimalist, accessible, and responsive portfolio site, built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies.

## Files

```
.
├── index.html      # All page markup
├── styles.css      # All styling
├── script.js       # Mobile menu toggle + scroll-spy navigation
├── assets/         # Images, icons, favicon
├── projects/       # HTML links for individual projects' webpages
├── LICENSE
└── README.md
```

## Running locally

Open `index.html` in any modern browser. That's it.

If you'd prefer a local server (recommended, since some browsers restrict relative paths when opening via `file://`):

```bash
# Python
python -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000`.

## Editing content

All copy lives directly inside `index.html`. Update the hero, experience, projects, and about sections there. Fonts are loaded from Google Fonts via `@import` in `styles.css`.

## Licence

Inspired by [Moisés Machuca (astro-zen)](https://github.com/immois/astro-zen), converted to vanilla HTML/CSS/JS.
