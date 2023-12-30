let todasCanciones = [
    {
        nombre: "Nico And The Niners",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "songphotos/Nico And The Niners.jpg",
        genero: "Rock Alternativo",
        source: "Songs/Nico And The Niners.mp3",
    },
    {
        nombre: "Stupid Love Story",
        nombreArtista: "Canserbero",
        songArtwork: "songphotos/Stupid Love Story.jpeg",
        genero: "Hip Hop / Rap",
        source: "Songs/Stupid Love Story.mp3",
    },
    {
        nombre: "Ride",
        nombreArtista: "Twenty One Pilots",
        songArtwork: "songphotos/Ride.jpeg",
        genero: "Hip Hop / Rap",
        source: "Songs/Ride.mp3",
    },
    {
        nombre: "So Far Away",
        nombreArtista: "Avenged Sevenfold",
        songArtwork: "songphotos/So Far Away.jpg",
        genero: "Heavy Metal",
        source: "Songs/So Far Away.mp3",
    },
    {
        nombre: "Radioactive",
        nombreArtista: "Imagine Dragons",
        songArtwork: "songphotos/radioactive.jpg",
        genero: "Rock Alternativo",
        source: "Songs/Radioactive.mp3",
    },
    {
        nombre: "Demons",
        nombreArtista: "Imagine Dragons",
        songArtwork: "songphotos/Demons.jpeg",
        genero: "Rock Alternativo",
        source: "Songs/Demons.mp3",
    },
    {
        nombre: "Hear Me Now",
        nombreArtista: "Alok",
        songArtwork: "songphotos/Hear Me Now.jpg",
        genero: "Electronica",
        source: "Songs/Hear Me Now.mp3",
    },
    {
        nombre: "La Vuelta al Mundo",
        nombreArtista: "Calle 13",
        songArtwork: "songphotos/La Vuelta Al Mundo.jpg",
        genero: "Urbano",
        source: "Songs/La Vuelta Al Mundo.mp3",
    },
    {
        nombre: "Don't Stop (Remix)",
        nombreArtista: "Zedised",
        songArtwork: "songphotos/Don't Stop.webp",
        genero: "Deep House",
        source: "Songs/Dont Stop.mp3",
    },
    {
        nombre: "Middle",
        nombreArtista: "SCVE",
        songArtwork: "songphotos/Middle.jpg",
        genero: "Deep House",
        source: "Songs/Middle.mp3",
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