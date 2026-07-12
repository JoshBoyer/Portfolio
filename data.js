/* ---------------------------------------------------------------------------
   Site content lives here. To add a project or experiment, add an entry to
   the matching array below — the homepage renders these automatically.
--------------------------------------------------------------------------- */

const PROJECTS = [
  {
    emoji: "🚧",
    title: "Your next project",
    description:
      "This card is a placeholder — edit data.js to add real projects. " +
      "Each entry needs a title, description, tags, and an optional link.",
    tags: ["placeholder"],
    status: "edit data.js",
    link: "https://github.com/joshboyer",
  },
  {
    emoji: "🧰",
    title: "This portfolio",
    description:
      "The site you're looking at: hand-built static HTML/CSS/JS, no " +
      "frameworks or build step, deployed automatically with GitHub Pages.",
    tags: ["html", "css", "javascript"],
    status: "live",
    link: "https://github.com/joshboyer/portfolio",
  },
];

const EXPERIMENTS = [
  {
    emoji: "✨",
    title: "Particle Field",
    description:
      "An interactive canvas of drifting particles that connect into " +
      "constellations and react to your cursor.",
    tags: ["canvas", "animation"],
    link: "experiments/particle-field.html",
  },
  {
    emoji: "🌊",
    title: "Wave Grid",
    description:
      "A grid of dots rippling through sine waves — tweak frequency and " +
      "amplitude live with the on-screen controls.",
    tags: ["canvas", "generative"],
    link: "experiments/wave-grid.html",
  },
];
