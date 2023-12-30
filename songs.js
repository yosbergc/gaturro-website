let todasCanciones = [
    {
        nombre: "Nico And The Niners",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "songphotos/Nico And The Niners.jpg",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Stupid Love Story",
        nombreArtista: "Canserbero",
        songArtwork: "songphotos/Stupid Love Story.jpeg",
        genero: "Hip Hop / Rap",
        source: "",
    },
    {
        nombre: "Ride",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "songphotos/Ride.jpeg",
        genero: "Hip Hop / Rap",
        source: "",
    },
    {
        nombre: "So Far Away",
        nombreArtista: "Avenged Sevenfold",
        songArtwork: "songphotos/So Far Away.jpg",
        genero: "Heavy Metal",
        source: "",
    },
    {
        nombre: "Radioactive",
        nombreArtista: "Imagine Dragons",
        songArtwork: "songphotos/radioactive.jpg",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Demons",
        nombreArtista: "Imagine Dragons",
        songArtwork: "songphotos/Demons.jpeg",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Hear Me Now",
        nombreArtista: "Alok",
        songArtwork: "songphotos/Hear Me Now.jpg",
        genero: "Electronica",
        source: "",
    },
    {
        nombre: "La Vuelta al Mundo",
        nombreArtista: "Calle 13",
        songArtwork: "songphotos/La Vuelta Al Mundo.jpg",
        genero: "Urbano",
        source: "",
    },
    {
        nombre: "Don't Stop (Remix)",
        nombreArtista: "Zedised",
        songArtwork: "songphotos/Don't Stop.webp",
        genero: "Deep House",
        source: "",
    },
    {
        nombre: "Middle",
        nombreArtista: "SCVE",
        songArtwork: "songphotos/Middle.jpg",
        genero: "Deep House",
        source: "",
    }
];
let generos = {};
let genresSection = document.querySelector('.generos-section');
for (song of todasCanciones) {
    if (!generos[song.genero]) {
      generos[song.genero] = 1;
    } else {
      generos[song.genero] += 1;
    }
}
for (categoria in generos) {
    let span = document.createElement("span");
    span.innerHTML = categoria;
    span.classList.add('genero')
    genresSection.append(span)
}