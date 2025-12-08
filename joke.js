// movies.js — versión corregida compatible con index.html

const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const MOVIES = [
  {
    id: "the-karate-kid-2",
    title: "El Karate Kid 2",
    year: 2018,
    duration: "1h 56min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description: "Miles Morales se convierte en Spider-Man y conoce a otros héroes arácnidos de universos paralelos.",
    trailerUrl: sampleTrailer,
    image: "jokes/the-karate-kid-2.jpg",
    movie: "https://drive.google.com/file/d/1Gp-v1xvRausPDh9c88yxOSFusXM9dkwE/preview"
  },
  {
    id: "incredibulls-3",
    title: "Los Incredibulls 3",
    year: 2023,
    duration: "2h 20min 05s",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "Luego de ser mordido por una araña radioactiva, Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
    image: "jokes/incredibulls-3.jpg",
    trailerUrl: "trailers/across-the-spiderverse.mp4",
    movie: "https://drive.google.com/file/d/11SMv4hmFUM71MWcPYm5qXf5j-tJgeAWp/preview"
  },
  {
    id: "fast_and_the_fragile_the_final_lap",
    title: "Rapidos y Frágiles - La Vuleta Final",
    year: 2023,
    duration: "2h 20min 05s",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "Luego de ser mordido por una araña radioactiva, Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
    image: "jokes/fast_and_the_fragile_the_final_lap.jpg",
    trailerUrl: "trailers/across-the-spiderverse.mp4",
    movie: "https://drive.google.com/file/d/11SMv4hmFUM71MWcPYm5qXf5j-tJgeAWp/preview"
  },
  {
    id: "inside-vie2",
    title: "Vicio Intenso 2",
    year: 2000,
    duration: "",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "Luego de ser mordido por una araña radioactiva, Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos.",
    image: "jokes/vicio-intenso2.jpg",
    trailerUrl: "trailers/across-the-spiderverse.mp4",
    movie: "https://drive.google.com/file/d/11SMv4hmFUM71MWcPYm5qXf5j-tJgeAWp/preview"
  },
  {
    id: "faiv-naigs-at-freddys2",
    title: "Faiv Naigs At Freddy's 2: Próximamente",
    year: 2026,
    duration: "1h 45min",
    rating: "PG-13",
    genres: ["Terror","Misterio"],
    description:"Ha pasado un año desde la pesadilla sobrenatural en la pizzería Freddy Fazbear. La historia de lo que ocurrió allí se ha convertido en leyenda local, dando pie al primer “Fazfest”. Mike y Vanessa han mantenido en secreto la verdad a Abby, la hermana de 11 años de Mike. Pero cuando Abby decide reencontrarse con Freddy, Bonnie, Chica y Foxy, desata una serie de eventos aterradores que revelarán oscuros secretos sobre el origen de Freddy’s, desvelando un horror oculto por décadas.",
    trailerUrl: "trailers/five-nights-at-freddys2.mp4",
    image: "https://m.media-amazon.com/images/M/MV5BZmQ3NmIxNTgtYjFiNS00NzliLWI0YzAtZDkxY2E0YWIxZDEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    post: "jokes/faiv-naigs-at-freddys2.png",
    movie: ""
  }
];

// (Opcional) Exponerlo globalmente
window.MOVIES = MOVIES;