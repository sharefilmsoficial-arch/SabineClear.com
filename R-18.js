const sampleTrailer = "https://www.w3schools.com/html/mov_bbb.mp4"; // Tráiler genérico temporal

const MOVIES = [
  {
    id: "the-ugly-stepsister",
    title: "La hermanastra Fea",
    year: 2025,
    duration: "1h 56min",
    rating: "R-18",
    genres: ["Terror","Drama","Oscuro","Elevado"],
    description: "Elvira sueña con amor del príncipe Julián y está dispuesta a hacer lo que sea necesario para ajustarse a los ideales de belleza del reino.",
    trailerUrl: sampleTrailer,
    image: "R-18/images/the-ugly-stepsister.webp",
    post: "R-18/posters/the-ugly-stepsister.webp",
    movie: "https://drive.google.com/file/d/1x-44SfqShcU8_FamhccxsLxXZoJygCJ4/preview"
  },
  {
    id: "we're-the-millers",
    title: "¿Quién *&$%! son los Miller?",
    year: 2013,
    duration: "1h ",
    rating: "R-18",
    genres: ["Comedia","Aventura","Crimen"],
    description: "David, un distribuidor de marihuana de poca monta,aprende por las malas que ninguna buena acción queda sin castigo. Al intentar ayudar a unos jóvenes, es sorprendido por unos criminales, perdiendo su dinero y producto. David está endeudado con su proveedor y para solucionarlo, debe ir a México para recoger el nuevo cargamento. Para lograr la misión, David idea un plan infalible: reúne a una familia falsa y la sube a una casa rodante para dirigirse al sur durante un fin de semana salvaje.",
    trailerUrl: sampleTrailer,
    image: "R-18/images/quienes-son-los-millers.webp",
    post: "R-18/posters/quienes-son-los-millers.webp",
    movie: ""
  },
  {
    id: "el-perfume-la-historia-de-un-asesinato",
    title: "El Perfume - La Historia de un Asesinato",
    year: 2013,
    duration: "1h ",
    rating: "R-18",
    genres: ["Comedia","Aventura","Crimen"],
    description: "David, un distribuidor de marihuana de poca monta,aprende por las malas que ninguna buena acción queda sin castigo. Al intentar ayudar a unos jóvenes, es sorprendido por unos criminales, perdiendo su dinero y producto. David está endeudado con su proveedor y para solucionarlo, debe ir a México para recoger el nuevo cargamento. Para lograr la misión, David idea un plan infalible: reúne a una familia falsa y la sube a una casa rodante para dirigirse al sur durante un fin de semana salvaje.",
    trailerUrl: sampleTrailer,
    image: "R-18/images/quienes-son-los-millers.webp",
    post: "R-18/posters/quienes-son-los-millers.webp",
    movie: "https://drive.google.com/file/d/14PZN2XzVBriEHj2mrA635U8HLoI1ack2/preview"
];

// (Opcional) Exponerlo globalmente
window.MOVIES = MOVIES;
