let welcomeMessage = document.querySelector('.welcome-user');
let songsContainer = document.querySelector('.latest-songs');
let menuIcon = document.querySelector('.hamburgerMenu');
let menuContainer = document.querySelector('.menuMobile')
let closeMenuIcon = document.querySelector('.closeIcon');
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
}