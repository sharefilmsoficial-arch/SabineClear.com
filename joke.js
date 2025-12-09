const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const MOVIES = [
  {
    id: "the-karate-kid-2",
    title: "El Karate Kid 2",
    year: 2018,
    duration: "1h 56min",
    rating: "PG",
    genres: ["Animación", "Aventura"],
    description: "",
    trailerUrl: sampleTrailer,
    image: "jokes/the-karate-kid-2.jpg",
    movie: ""
  },
  {
    id: "incredibulls-3",
    title: "Los Incredibulls 3",
    year: 2023,
    duration: "2h 20min 05s",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "",
    image: "jokes/incredibulls-3.jpg",
    trailerUrl: "trailers/",
    movie: ""
  },
  {
    id: "meowana",
    title: "Meowana",
    year: 2023,
    duration: "2h 20min 05s",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "",
    image: "jokes/meowana.jpg",
    trailerUrl: "trailers/",
    movie: ""
  },
  {
    id: "fast_and_the_fragile_the_final_lap",
    title: "Rapidos y Frágiles - La Vuleta Final",
    year: 2023,
    duration: "2h 20min 05s",
    rating: "PG",
    genres: ["Animación", "Acción", "Aventura", "Superhéroes"],
    description: "",
    image: "jokes/fast_and_the_fragile_the_final_lap.jpg",
    trailerUrl: "trailers/across-the-spiderverse.mp4",
    movie: ""
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
  },
  {
    id: "futbolito",
    title: "futbolito",
    year: 2026,
    duration: "1h 45min",
    rating: "PG-13",
    genres: [""],
    description:"",
    trailerUrl: "trailers/",
    image: "jokes/futbolito.jpg",
    post: "jokes/.png",
    movie: ""
  },
  {
    id: "la-desnutricion-del-87",
    title: "La Desnutrición del 87💀",
    year: 2026,
    duration: "1h 45min",
    rating: "PG-13",
    genres: ["Terror","Misterio"],
    description:"Ha pasado un año desde la pesadilla sobrenatural en la pizzería Freddy Fazbear. La historia de lo que ocurrió allí se ha convertido en leyenda local, dando pie al primer “Fazfest”. Mike y Vanessa han mantenido en secreto la verdad a Abby, la hermana de 11 años de Mike. Pero cuando Abby decide reencontrarse con Freddy, Bonnie, Chica y Foxy, desata una serie de eventos aterradores que revelarán oscuros secretos sobre el origen de Freddy’s, desvelando un horror oculto por décadas.",
    trailerUrl: "trailers/five-nights-at-freddys2.mp4",
    image: "jokes/la-desnutricion-del-87.jpg",
    post: "jokes/faiv-naigs-at-freddys2.png",
    movie: ""
  }
];

// (Opcional) Exponerlo globalmente
window.MOVIES = MOVIES;
