const themes = [
  { club: "Mohun Bagan", type: "free", section: "clubs", color: "#155c35" },
  { club: "Barcelona", type: "paid", section: "clubs", color: "#a50044" },
  { club: "Real Madrid", type: "paid", section: "clubs", color: "#f1c40f" },
  { club: "New Gen Theme", type: "free", section: "new", color: "#3498db" },
  { club: "Elite Classic", type: "paid", section: "new", color: "#8e44ad" }
];

const container = document.getElementById("theme-container");

function renderThemes(filter = null) {
  container.innerHTML = "";
  const filtered = filter
    ? themes.filter(t => t.section === filter || t.type === filter)
    : themes;

  filtered.forEach(theme => {
    const card = document.createElement("div");
    card.className = "theme-card";
    card.innerHTML = `
      <div class="preview" style="background-color: ${theme.color};"></div>
      <h3>${theme.club}</h3>
      <button>${theme.type === "free" ? "Apply" : "Buy"}</button>
    `;
    container.appendChild(card);
  });
}

function filterSection(section) {
  renderThemes(section);
}

// Initial load
renderThemes();
