document.addEventListener("DOMContentLoaded", () => {

    const animationMovies = MOVIES.filter(movie =>
        movie.genres && movie.genres.some(
            g => g.toLowerCase() === "animación" || g.toLowerCase() === "animation"
        )
    );

    const container = document.getElementById("animation-gallery");
    container.innerHTML = "";

    animationMovies.forEach(movie => {
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
        container.appendChild(link);const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    container.innerHTML = "";

    animationMovies
        .filter(movie => movie.title.toLowerCase().includes(value))
        .forEach(movie => {
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
});

    });
});
