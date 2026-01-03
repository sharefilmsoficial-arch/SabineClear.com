let ANIMES = [];
let SERIES = JSON.parse(localStorage.getItem('seriesData')) || [];

document.addEventListener("DOMContentLoaded", () => {

  // 🔥 ANIMES DE PELIS + SERIES
  ANIMES = [
    ...MOVIES.filter(m =>
      Array.isArray(m.genres) &&
      m.genres.includes("Anime")
    ),
    ...SERIES.filter(s =>
      Array.isArray(s.genres) &&
      s.genres.includes("Anime")
    ).map(s => ({ ...s, isSeries: true }))
  ];

  renderAnimes(ANIMES);

  // 🔍 BUSCADOR
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", e => {
    const q = e.target.value.toLowerCase();
    const filtered = ANIMES.filter(a =>
      a.title.toLowerCase().includes(q)
    );
    renderAnimes(filtered);
  });

});


// 🧩 TARJETA
function createAnimeCard(movie){
  const link = document.createElement("a");
  link.className = "card-link";

  link.href = movie.isSeries
    ? `serie.html?id=${movie.id}`
    : `movie.html?id=${movie.id}`;

  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundImage = `url(${movie.image})`;

  const info = document.createElement("div");
  info.className = "card-info";
  info.innerHTML = `<h3>${movie.title}</h3>`;

  card.appendChild(info);
  link.appendChild(card);

  return link;
}


// 🎨 RENDER
function renderAnimes(list){
  const container = document.getElementById("animeGallery");
  container.innerHTML = "";
  list.forEach(movie =>
    container.appendChild(createAnimeCard(movie))
  );
}