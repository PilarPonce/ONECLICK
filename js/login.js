window.addEventListener (`load`,function(){
/* 
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
    if (!validatePassword (password))return false;
    return true;
}
function validateName(name) {
    let errorName = document.getElementById('avison');
    if (name.value.length < 6){
      errorName.innerHTML = "Nombre de usuario no puede tener menos de 6 digitos";
      errorName.classList.add('alert-danger');
      name.classList.add('is-invalid');
      return false;
    } else{
      avison.innerHTML = "";
      errorNmae.classList.remove('alert-danger');
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
      formulario.elements.email.focus();
      return true;
    }
}




  function validateEmail(email) {
    let re = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    let error = document.getElementById('avisoe');


    if (!re.test(email.value)){ 
      
      email.classList.add('is-invalid'); 
      console.log(aviso);
      error.innerHTML= "Debe colocar un email válido";
      error.classList.add('alert-danger');
      //errorEmail.classList.add('alert-danger');
     // email.addEventListener('change',cambioNombre);
    return false
  }else{
    error.innerHTML= "";
    error.classList.remove('alert-danger');
    email.classList.remove('is-invalid'); 
    email.classList.add('is-valid');
    formulario.elements.password.focus()
    return true;
  }
  }

  function validatePassword(password) {
    let rep = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    let errorPassword = document.getElementById('eavisop');

    if (!rep.test(password.value)) {
      errorPassword.innerHTML = "Debe especificar una contraseña válida";
      errorPassword.classList.add('alert-danger');
      password.classList.add('is-invalid');
      return false;  

    }else{
      errorPassword.innerHTML = "";
      errorPassword.classList.remove('alert-danger');
      password.classList.remove('is-invalid');
      password.classList.add('is-valid');
      formulario.elements.passwordRepeat.focus();
      // swal('Error', 'Ingrese una contraseña válida', 'error')
      return true;
    }

   
  }
  */


   
var nombre = document.getElementById("name")
var email = document.getElementById("email")
var pass = document.getElementById("password")
var form = document.getElementById("form")
var avisando = document.getElementById("aviso")

form.addEventListener("submit", enviar=>{
    enviar.preventDefault()
    let aviso = ""
    let entrar = false
    let elEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/
    avisando.innerHTML = ""
    if(nombre.value.length <1){
        aviso += `El nombre es invalido <br>`
        entrar = true
    }
    if(!elEmail.test(email.value)){
        aviso += `El email es invalido <br>`
        entrar = true
    }
    if(pass.value.length < 6){
        aviso += `La contraseña es invalida <br>`
        entrar = true
    }

    if(entrar){
        avisando.innerHTML = aviso
    }else{
        avisando.innerHTML = "Enviado"
    }
})

})


