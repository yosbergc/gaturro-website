let welcomeMessage = document.querySelector('.welcome-user');
let songsContainer = document.querySelector('.latest-songs');
let menuIcon = document.querySelector('.hamburgerMenu');
let menuContainer = document.querySelector('.menuMobile')
let closeMenuIcon = document.querySelector('.closeIcon');
let playerSmall = document.querySelector('.player');
let nombre;
let cancionActual = new Audio();
let currentSongName = document.querySelector('.current-song-title');
let currentSongArtist = document.querySelector('.current-song-artist');
let currentSongArtwork = document.querySelector('.current-song-artwork');
let currentTimeSmall = document.querySelector('.currentTime');

menuIcon.addEventListener('click', menuMobile);
closeMenuIcon.addEventListener('click', menuMobile)
window.addEventListener('load', iniciarSistema);
function menuMobile() {
    if (menuContainer.classList.contains('hide')) {
        menuContainer.classList.remove('hide');
    } else {
        menuContainer.classList.add('hide')
    }
}
function iniciarSistema() {
    let usuario = localStorage.getItem('loggedUser');
    welcomeMessage.innerHTML = `${usuario}`;
    agregarCanciones();
}
function agregarCanciones() {
    for (song of todasCanciones) {
        let {nombre, songArtwork} = song;
        let songContainer = document.createElement('div')
        songContainer.classList.add('song')
        let imagen = document.createElement('img');
        imagen.setAttribute('src', songArtwork);
        let songNameContainer = document.createElement('h3');
        songNameContainer.innerHTML = nombre;
        songNameContainer.classList.add('song-name')
        songContainer.append(imagen, songNameContainer);
        songsContainer.append(songContainer)
    }
    addListeners();
}
function addListeners() {
    for (let i = 0; i < songsContainer.children.length; i++)
    songsContainer.children[i].addEventListener('click', () => {
        nombre = songsContainer.children[i].children[1].innerHTML;
        reproducirCancion(nombre);
    })
}
function reproducirCancion(nombreCancion) {
    // Buscamos la canción en la BD
    let cancionObtenida = todasCanciones.find((cancion) => cancion.nombre == nombreCancion);
    // Desestructuramos el objeto.
    let {nombre, songArtwork, nombreArtista} = cancionObtenida;
    cancionActual.pause()
    cancionActual.src = cancionObtenida.source;
    cancionActual.play();
    // Actualizamos los datos del small player
    currentTimeSmall.style.width = "0%";
    smallPlayer(nombre, songArtwork, nombreArtista)
}
function smallPlayer(nombre, songArtwork, nombreArtista) {
    currentSongName.innerHTML = nombre;
    currentSongArtist.innerHTML = nombreArtista;
    currentSongArtwork.setAttribute('src', songArtwork);
    playerSmall.classList.remove('hide')
    let progressBarSmall = setInterval(() => {
        currentTimeSmall.style.width = `${((cancionActual.currentTime / cancionActual.duration) * 100)}%`
    }, 1000);

}