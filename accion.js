document.addEventListener("DOMContentLoaded", () => {

  const search = document.getElementById("search");
  const container = document.getElementById("accion-gallery");

  if (!Array.isArray(MOVIES)) {
    console.error("MOVIES no cargado");
    return;
  }

  /* === LISTA BASE (NO SE MODIFICA) === */
  const ACCION = MOVIES.filter(movie =>
    Array.isArray(movie.genres) &&
    movie.genres.some(g =>
      g.toLowerCase() === "accion" || g.toLowerCase() === "acción"
    )
  );

  /* === CREAR TARJETA (MISMA QUE YA USAS) === */
  function createCard(movie) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = `movie.html?id=${movie.id}`;

    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${movie.image})`;

    const info = document.createElement("div");
    info.className = "card-info";
    info.innerHTML = `
      <h3>${movie.title}</h3>
      <p>${movie.year ?? ""}</p>
    `;

    card.appendChild(info);
    link.appendChild(card);
    return link;
  }

  /* === PINTAR === */
  function pintar(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
      container.innerHTML = `
        <p style="color:#aaa;padding:20px;">
          No se encontraron resultados
        </p>`;
      return;
    }

    lista.forEach(movie => {
      container.appendChild(createCard(movie));
    });
  }

  /* Mostrar todo al cargar */
  pintar(ACCION);

  /* === BUSCADOR (IGUAL A SAGAS) === */
  search.addEventListener("input", e => {
    const q = e.target.value.toLowerCase().trim();

    if (q === "") {
      pintar(ACCION);
      return;
    }

    const filtradas = ACCION.filter(movie =>
      movie.title.toLowerCase().includes(q)
    );

    pintar(filtradas);
  });

});