window.addEventListener (`load`,function(){

    /*
window.addEventListener("load",function(){ 

    var contenidoBusqueda = document.querySelector(`[name=nombreusuario]`)
    var form = document.querySelector(`#form`)


    form.addEventListener(`submit`, function (event) {
       
        if (contenidoBusqueda.value == ``) {
        event.preventDefault()
        contenidoBusqueda.classList.add(`error`)
        form.innerHTML = `<div>
        <input name="nombreusuario" type="text" placeholder="Nombre...">
        <button id="botonsubmit" type="submit">Enviar</button> </div>
        <p id="errorp">Error: Porfavor recargue la pestaña e ingrese su nombre.</p>
        `
        }
            })
*/
})


    var nombre = document.getElementById("name")
    var email = document.getElementById("email")
    var pass = document.getElementById("password")
    var form = document.getElementById("form")
    var avisando = document.getElementById("aviso")
    
    form.addEventListener("submit", enviar=>{
        enviar.preventDefault()
        var aviso = ""
        var entrar = false
        var elEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/  
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
        var nombrePersona = nombre.value
        localStorage.setItem("username", nombrePersona)
    })
    
    var queryString = location.search;
    
    queryString = new URLSearchParams(queryString);
    
    var login = document.querySelector(".completa");
    
    var loQueCompletoElUsuario = queryString.get("input");




