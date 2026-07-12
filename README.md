# Portfolio

Personal portfolio site for sharing work and experiments. Hand-built static
HTML/CSS/JS — no frameworks, no build step, nothing to install.

## Run it locally

Any static file server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser.

## Add a project

Edit [`data.js`](data.js) and add an entry to the `PROJECTS` array:

```js
{
  emoji: "🚀",
  title: "My Cool App",
  description: "What it is and why it's interesting.",
  tags: ["react", "api"],
  status: "live",              // optional
  link: "https://example.com", // optional — card links here
},
```

The homepage renders the card automatically.

## Add an experiment

1. Create a standalone page under [`experiments/`](experiments/) — copy
   `experiments/wave-grid.html` as a starting point. It links back to the
   homepage and reuses the shared stylesheet.
2. Add an entry to the `EXPERIMENTS` array in `data.js` pointing at it:

```js
{
  emoji: "🧪",
  title: "My Experiment",
  description: "A one-line teaser.",
  tags: ["canvas"],
  link: "experiments/my-experiment.html",
},
```

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
experiments/  standalone experiment pages
```
