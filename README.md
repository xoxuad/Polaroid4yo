# Polaroid4yo — Showcase Website

A static, no-build showcase website for the Polaroid4yo brand. Pure HTML5,
CSS3 and vanilla JavaScript — no frameworks, no backend, no database.

## Run it locally

There is nothing to install or build.

1. Unzip / copy the `polaroid4yo` folder anywhere on your computer.
2. Double-click `index.html` — it opens in your default browser.

That's it. Every page, style and behavior is self-contained.

(Optional, for a slightly smoother experience while editing: you can also
serve the folder with any static server, e.g. `python3 -m http.server`
from inside the folder, then visit `http://localhost:8000`. This is not
required — opening the file directly also works.)

## Project structure

```
polaroid4yo/
├── index.html          → all page content and structure
├── style.css           → all visual design (colors, layout, animations)
├── script.js           → all behavior (language switch, gallery, FAQ, modal)
├── favicon.ico          → browser tab icon (multi-size)
├── .nojekyll            → tells GitHub Pages to serve the site as-is
└── assets/
    ├── logo/            → the logo files (see below) + inline-SVG notes
    ├── templates/       → put your real template photos here
    └── images/          → free folder for any future images
```

## The logo

Two ready-to-use logo files live in `assets/logo/`:

- **`icon.svg`** — the square symbol on its own (a Polaroid card with a
  soft pastel gradient photo and a flash dot). Editable as text, since
  it's plain SVG.
- **`logo.svg`** — the icon next to the "Polaroid4yo" wordmark, for use
  outside the website (a GitHub repo image, a slide, print material).

From those, PNG versions were generated for practical use: favicon
sizes (16/32px), an Android/home-screen icon (192px), an iOS home
screen icon (`apple-touch-icon.png`), and a large 512px version used
as the preview image when the site link is shared on social apps.
Full details and how to regenerate them after an edit are in
`assets/logo/README.txt`.

The website itself (nav bar and footer) draws the logo as inline SVG
directly inside `index.html` rather than loading these files, so it
can pick up the site's live CSS colors and stay pixel-sharp at any
size — but the standalone files are what you'd upload as an Instagram
profile picture, use in a README, or reuse anywhere off-site.

## What you can edit yourself

**Brand colors** — open `style.css`, edit the values inside `:root` at the
top of the file (search for "BRAND VARIABLES"). Every card, button and
gradient on the site uses these variables.

**Text / translations (FR & EN)** — open `script.js`, edit the
`translations` object near the top. French is `fr`, English is `en`.
Nothing else needs to change — the site re-renders automatically.

**Templates gallery** — open `script.js`, edit the `templates` array.
Add, remove or reorder entries; each needs a `name`, an `image` path
(put the actual file in `assets/templates/`), and a `color` used only
as a placeholder if the image isn't found yet. See
`assets/templates/README.txt` for step-by-step instructions.

**Instagram link** — search for `instagram.com/polaroid4yo` in
`index.html` and replace every occurrence if the handle ever changes.

## Host it for free on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `polaroid4yo`) — public,
   no README/license needed since you already have files.
2. **Upload the project**, either:
   - via the GitHub website: open the repo → "Add file" → "Upload
     files" → drag in everything *inside* the `polaroid4yo` folder
     (`index.html`, `style.css`, `script.js`, `favicon.ico`,
     `.nojekyll`, and the `assets` folder) — not the folder itself, its
     contents should sit at the repo root; or
   - via git in a terminal, from inside the `polaroid4yo` folder:
     ```
     git init
     git add .
     git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/polaroid4yo.git
     git push -u origin main
     ```
3. **Turn on Pages**: in the repo, go to *Settings → Pages*. Under
   "Build and deployment", set Source to **Deploy from a branch**,
   branch **main**, folder **/ (root)**. Save.
4. GitHub will give you a live URL after a minute or two, typically:
   `https://YOUR-USERNAME.github.io/polaroid4yo/`

Any time you push new changes to `main`, the live site updates
automatically within a minute — no rebuild step, since it's plain
HTML/CSS/JS.

## Important by design

This is a **showcase site only**. There is intentionally no shopping
cart, no checkout, no payment, no account system and no database —
every "order" call to action sends the visitor to the Instagram page
instead: https://www.instagram.com/polaroid4yo

## Already tested

- FR/EN switch (persists across reloads via `localStorage`)
- Mobile hamburger menu
- Template preview modal (click, close button, click outside, Esc key)
- FAQ accordion (single-open, keyboard accessible)
- All Instagram buttons open in a new tab
- Responsive layout from mobile to desktop, no horizontal scroll
- Scroll-in animations, respecting `prefers-reduced-motion`
- No JavaScript console errors
