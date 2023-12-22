let registerName = document.querySelector('.registerName');
let registerEmail = document.querySelector('.registerEmail');
let registerPassword = document.querySelector('.registerPassword');
let registerSubmit = document.querySelector('.register-button');
let errorMessage = document.querySelector('.error')

registerSubmit.addEventListener('click', registerNewUser);

function registerNewUser() {
    let camposVacios = registerName.value.length == 0 || registerEmail.value.length == 0 || registerPassword.value.length == 0;
    if (camposVacios) {
        enviarMensaje("Hay campos vacios");
    } else {
        if (!localStorage.getItem('users')) {
            let newUser = {
                username: registerName.value,
                email: registerEmail.value,
                password: registerPassword.value
            }
            let users = [];
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users))
            enviarMensaje('Usuario registrado satisfactoriamente');
        } else {
            let actualUsers = JSON.parse(localStorage.getItem('users'));
            if(actualUsers.some((element) => {
                    return element.username == registerName.value;
                })) {
                    enviarMensaje("Usuario ya existe");
            } else {
                let newUser = {
                    username: registerName.value,
                    email: registerEmail.value,
                    password: registerPassword.value
                }
                let actualUsers = JSON.parse(localStorage.getItem('users'));
                actualUsers.push(newUser)
                localStorage.setItem('users', JSON.stringify(actualUsers));
                enviarMensaje('Usuario registrado satisfactoriamente');
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