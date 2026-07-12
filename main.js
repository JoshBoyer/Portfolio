/* Renders PROJECTS and EXPERIMENTS (from data.js) into the homepage grids. */

function cardHTML(item) {
  const tagList = [...(item.tags || [])];
  if (item.private) tagList.push("private repo");
  const tags = tagList
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");
  const status = item.status
    ? `<span class="card-status">● ${item.status}</span>`
    : "";
  return `
    <span class="card-emoji">${item.emoji || "🔹"}</span>
    <h3>${item.title}</h3>
    ${status}
    <p>${item.description}</p>
    <div class="card-tags">${tags}</div>
  `;
}

function renderGrid(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  for (const item of items) {
    const card = document.createElement(item.link ? "a" : "div");
    card.className = "card";
    if (item.link) {
      card.href = item.link;
      if (/^https?:/.test(item.link)) {
        card.target = "_blank";
        card.rel = "noopener";
      }
    }
    card.innerHTML = cardHTML(item);
    grid.appendChild(card);
  }
}

renderGrid("work-grid", PROJECTS);
renderGrid("experiments-grid", EXPERIMENTS);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
