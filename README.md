# Helsie's birthday site

Static multi-page site: no build step, no dependencies.

- Pages: `index.html`, `reasons.html`, `open-when.html`, `cards.html`, `us.html`
- All text lives in `const C={...}` at the top of `app.js` (friend, you, met, hours, song, reasons, notes).
- Theme and animation: `style.css` and the bottom of `app.js`.

## Deploy on Vercel
Import the GitHub repo, Framework Preset: Other, leave build and output empty. Deploy.
Or run `npx vercel --prod` in this folder.
