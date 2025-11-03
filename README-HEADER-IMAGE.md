# Add a Header Picture to the Hero

## 1) Files to add
Place your images here (create the folder if it doesn't exist):

- `assets/images/hero/crestline-hero-2400.webp` (≈2400×1400)
- `assets/images/hero/crestline-hero-1600.webp` (≈1600×950)
- `assets/images/hero/crestline-hero-1024.webp` (≈1024×640)
- `assets/images/hero/crestline-hero-1024.jpg`  (fallback)

Target sizes: 21:9 to 16:9 crop. Keep each file under ~350 KB if possible.

## 2) Add the CSS
Append the contents of `hero-image.css` **after** your existing CSS imports (or paste into `assets/css/crestline-overrides.css`).

## 3) Replace the hero
Paste `hero-image.html` into your `index.html` in place of the current hero block.

That’s it — your home header will now use a responsive hero photo with a dark overlay to keep text legible.
