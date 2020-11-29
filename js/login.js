window.addEventListener(`load`, function () {

    var nombre = document.getElementById("name") //traigo del html los elementos del form
    var email = document.getElementById("email")
    var pass = document.getElementById("password")
    var form = document.getElementById("form")
    var avisando = document.getElementById("aviso")

    form.addEventListener("submit", enviar => {   //evento de cuando yo mando formulario y despues hace una variable que es entrar false
        enviar.preventDefault() //evita que se envie el formulario

        var aviso = ""

       // console.log("hola me envio");

        var entrar = false //valida de las coosas que yo pongo en el formulario
        var elEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ //regular expresion. verifica que un mail tenga forma de mail. como validar texto
        
        avisando.innerHTML = "" //chequea ditintos campos con los diversos casos
        if (nombre.value.length < 1) { //se fija que el nombre tenga mas de un caracter
            aviso += `El nombre es invalido <br>`
            entrar = true
        }
        if (!elEmail.test(email.value)) { //el ! niega la condicion
            aviso += `El email es invalido <br>`
            entrar = true
        }
        if (pass.value.length < 6) { //se fija que la contrasena tenga mas de 6 caracteres
            aviso += `La contraseña es invalida <br>`
            entrar = true
        }

        if (entrar) { //si alguna de esa condiciones es verdadera te dice el error
            avisando.innerHTML = aviso 
        } else {
            avisando.innerHTML = "Enviado" //aca se envia
            localStorage.setItem("UserName", nombre.value) //guarda en el localsotrage tu nombre para despues que te aparezca en el favs
        }
    })


})
