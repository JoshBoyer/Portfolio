# joshboyer.ca — Portfolio

Personal portfolio site for sharing work and experiments. Hand-built static
HTML/CSS/JS — no frameworks, no build step, nothing to install.

## Run it locally

Any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser.

## Add or edit a project

All content lives in [`data.js`](data.js) — two arrays, `PROJECTS`
(Selected Work) and `EXPERIMENTS` (the lab bench). Add an entry and the
homepage renders the card automatically:

```js
{
  emoji: "🚀",
  title: "My Cool App",
  description: "What it is and why it's interesting.",
  tags: ["react", "api"],
  status: "live",              // optional badge
  link: "https://example.com", // optional — card links here
  private: true,               // optional — adds a "private repo" tag
},
```

Cards without a `link` render as plain cards; external links open in a
new tab.

## Deploy

Pushes to `main` deploy automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

## Structure

```
index.html    homepage (hero, work, experiments, about, contact)
styles.css    all styling — design tokens at the top for easy re-theming
data.js       site content: PROJECTS and EXPERIMENTS arrays
main.js       renders the content into the homepage grids
```
