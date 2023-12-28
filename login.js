let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginButton = document.querySelector('.loginButton');
let errorMessage = document.querySelector('.error')
loginButton.addEventListener('click', iniciarSesion);

function iniciarSesion() {
    let data = {
        username: username.value,
        password: password.value
    }
    let users = localStorage.getItem('users');
    if (username.value.length == 0 || password.value.length == 0) {
        enviarMensaje('Campos vacíos')
    } else {
        if (!users) {
            enviarMensaje('Usuario no registrado.')
        } else {
            let obtenerUsuarios = JSON.parse(localStorage.getItem('users'));
            let usuario = obtenerUsuarios.some((element) => {
                return element.email == data.username;
            });
            let password = obtenerUsuarios.some((element) => {
                return element.password == data.password;
            });
            if (!usuario) {
                enviarMensaje('Usuario no registrado')
            } else if (!password) {
                enviarMensaje('Clave incorrecta.')
            } else {
                let usuarioLogObtenido = obtenerUsuarios.find((elemento) => {
                    return elemento.email == data.username;
                }).username;
                enviarMensaje('Bienvenido a Gaturro')
                setTimeout(usuarioLogueado, 3000, usuarioLogObtenido)
            }
        }
    }
    
}
function ocultarError() {
    errorMessage.classList.remove('show')
}
function enviarMensaje (mensaje) {
    errorMessage.innerHTML = mensaje;
    errorMessage.classList.add('show')
    setTimeout(ocultarError, 3000)
}
function usuarioLogueado(usuario) {
    localStorage.setItem('loggedUser', usuario)
    window.location.assign('dashboard.html')
}