# Crestline Merge Pack

This zip contains **drop‑in files** and **snippets** so you can update your site without hunting through code.

## What’s inside
- `css/crestline-overrides.css` — brand tokens, fluid type, hero, buttons, cards
- `snippets/head-fonts.html` — fonts + `<link>` to include the override CSS
- `snippets/hero.html` — ready‑to‑paste hero block
- `pages/services-section.html` — services grid snippet
- `pages/locations-title-block.html` — title block for each location page
- `pages/index.NEW.html` — optional fully built index you can diff against your existing one

## Quick merge (safest)
1. **Copy** `css/crestline-overrides.css` → `assets/css/crestline-overrides.css`.
2. In every page’s `<head>`, after your `assets/css/main.css` line, **paste** the contents of `snippets/head-fonts.html` (this links the fonts and the new override CSS, and sets a better `<title>`).
3. Replace your current home page hero **inner content** with `snippets/hero.html`.
   - If your hero is inside `<section id="intro">…</section>`, just replace the inner markup.
4. On `services.html`, add the contents of `pages/services-section.html` where your services list lives.
5. On each location page (`edmonton.html`, `st-albert.html`, etc.), paste `pages/locations-title-block.html` at the top of the main content and change the city name.
6. Verify buttons/links (Free Estimate → `contact.html`, Services → `services.html`).

## Optional (alternative approach)
- If you prefer a full page example, open `pages/index.NEW.html` and copy the relevant parts into your current `index.html`.
- You **don’t** need to edit `assets/css/main.css` — the override file handles everything.

## Motto + Service line (for reference)
- **Motto:** `One Call. Every Project. Done Right.`
- **Service line:** `Renovations • Repairs • Painting • Junk Removal — Edmonton & Area`

If you want me to generate a ZIP that **directly replaces** `index.html` and `services.html` in your repo’s current structure, send me a link to the live files (or upload them) and I’ll produce a repo‑accurate patch.
