# Birthday site

A static site: no build step, no dependencies.

## Edit the content
Open `index.html`, find `const C={...}` inside the `<script>` and change:
friend, you, met (YYYY-MM-DD), hours, song, plus any text.
Also change the sign-off name at the end of `final`, and the `<title>`.

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. Vercel > Add New > Project > import the repo.
3. Framework Preset: Other. Leave build command and output directory empty. Deploy.
(Or run `npx vercel --prod` inside this folder.)
