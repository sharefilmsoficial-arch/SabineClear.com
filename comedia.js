document.addEventListener("DOMContentLoaded", () => {

    const comedyMovies = MOVIES.filter(movie =>
        movie.genres && movie.genres.some(
            g => g.toLowerCase() === "comedia" || g.toLowerCase() === "comedy"
        )
    );

    const container = document.getElementById("comedy-gallery");
    const searchInput = document.getElementById("search");

    function renderMovies(list) {
        container.innerHTML = "";

        list.forEach(movie => {
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
                <p>${movie.year}</p>
            `;

            card.appendChild(info);
            link.appendChild(card);
            container.appendChild(link);
        });
    }

    // Mostrar todas al cargar
    renderMovies(comedyMovies);

    // 🔍 Buscador
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        const filtered = comedyMovies.filter(movie =>
            movie.title.toLowerCase().includes(value)
        );

        renderMovies(filtered);
    });

});
