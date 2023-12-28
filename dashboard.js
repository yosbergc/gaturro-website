let welcomeMessage = document.querySelector('.welcome-user');
window.addEventListener('load', iniciarSistema);

function iniciarSistema() {
    let usuario = localStorage.getItem('loggedUser');
    welcomeMessage.innerHTML = `${usuario}`;
}
