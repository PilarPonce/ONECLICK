window.addEventListener (`load`,function(){

//aca guardo el form con sus elementos

var formulario = document.querySelector (".form");
formulario.elements.email.focus ();
console.log (formulario)

//aca armo mi funcion para que se ejecute una vez que el usuario 
//envie o de enter en cada input

formulario.onsubmit = function (evento) {
    //aca evito que por defecto se envie el formulario
    //si el formulario pasa las validaciones le doy el ingreso al usuario
    if (!validateRegisterForm()) {
        evento.preventDefault ()
    } else {
        formulario.submit ()
    }
}

//esta es la funcion que valida todos los campos del formulario
function validateRegisterForm () {
    //esta manera de programarlo en ECMA6, se llama destruccion de codigo
    var {name, email, password} = formulario.elements

    //forma mas corta de hacer un if simple
    if (!validateName(name)) return false;
    if (!validateEmail(email)) return false;
    if (!validatePassword ())return false;
    return true;
}



})