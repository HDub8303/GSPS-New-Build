# Global SP Solutions Website

Purple & gold themed static website with particle animation and grid design.

## Pages
- `index.html` — Homepage
- `services.html` — Services & Process
- `experiences.html` — Track Record & Expertise
- `solution.html` — Our Approach & Problem/Solution
- `contact.html` — Contact Form & Direct Info

## Files
- `style.css` — Shared stylesheet (all theming, layout, components)
- `main.js` — Shared JS (particles, cursor, scroll reveal, active nav)

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `gsps-site`)
2. Upload all files to the root of the repo
3. Go to **Settings → Pages**
4. Set Source to `Deploy from a branch` → `main` → `/ (root)`
5. Your site will be live at `https://<your-username>.github.io/gsps-site/`

## Customization

All colors are CSS variables in `style.css`:
```css
:root {
  --c1: #9b4dff;  /* vivid purple  */
  --c2: #f0c040;  /* warm gold     */
  --c3: #c97dff;  /* light lavender */
  --c4: #d4a017;  /* deep gold     */
}
```

Contact email is set in `contact.html` — update `caltoone@gmail.com` as needed.
