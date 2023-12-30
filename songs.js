let todasCanciones = [
    {
        nombre: "Nico And The Niners",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Stupid Love Story",
        nombreArtista: "Canserbero",
        songArtwork: "",
        genero: "Hip Hop / Rap",
        source: "",
    },
    {
        nombre: "Ride",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "",
        genero: "Hip Hop / Rap",
        source: "",
    },
    {
        nombre: "So Far Away",
        nombreArtista: "Avenged Sevenfold",
        songArtwork: "",
        genero: "Heavy Metal",
        source: "",
    },
    {
        nombre: "Radioactive",
        nombreArtista: "Imagine Dragons",
        songArtwork: "",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Demons",
        nombreArtista: "Imagine Dragons",
        songArtwork: "",
        genero: "Rock Alternativo",
        source: "",
    },
    {
        nombre: "Hear Me Now",
        nombreArtista: "Alok",
        songArtwork: "",
        genero: "Electronica",
        source: "",
    },
    {
        nombre: "La Vuelta al Mundo",
        nombreArtista: "Calle 13",
        songArtwork: "",
        genero: "Urbano",
        source: "",
    },
    {
        nombre: "Don't Stop (Remix)",
        nombreArtista: "Zedised",
        songArtwork: "",
        genero: "Deep House",
        source: "",
    },
    {
        nombre: "Middle",
        nombreArtista: "SCVE",
        songArtwork: "",
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