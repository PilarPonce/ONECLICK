window.addEventListener('load', function () {
    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search; //traemos lo que viene despues del signo de pregunta
    var queryStringObj = new URLSearchParams(queryString); //separamos en un objeto y dividimos en partes que podamos manejar
    var id = queryStringObj.get("id"); //mi objeto que yo puedo manejar, traeme el id que esta en la barra del buscador
    var tipo = queryStringObj.get("tipo");

    var tusFavoritos = document.querySelector(".todofavoritos") //traemos html
    var favoritos = JSON.parse(localStorage.getItem("favoritos")) //le decimos al localstorage que me traiga el item fav 
    //y que json lo convierta en array para poder manipularlo
    console.log(favoritos)


    if (favoritos === null || favoritos.length === 0) { //triple no es solo contenido de la variable sino que del tipo de dato
        console.log("Todavía no hay favoritos")                              //si favs esta vacio le aviso al usuario que esta vacio
        tusFavoritos.innerHTML = `<h1> ¡No tenes ningún favorito! </h1>`
    } else {
        //muestro lo que hay dentro por cada favorito en favoritos
        for (let i = 0; i < favoritos.length; i++) {
            const element = favoritos[i];
            console.log(element)
            if (element.tipo === "pelicula") {
                fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=${apiKey}&language=en-US&page=1`)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (data) {
                        console.log(data);
                        var contenedorfavoritos = document.querySelector(".listafavoritos") //converti en variable
                        contenedorfavoritos.innerHTML += `
                        <a href="detail.html?tipo=pelicula&id=${data.id}">
                            <li class = "imfv">
                                <img src="${linkimagen}${data.poster_path}" alt="">
                            </li>
                        <a/>
                        `
                    })
                    .catch(function (error) {
                        console.log('El error fue: ' + error);
                    })
            } else {
                fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=${apiKey}&language=en-US&page=1`)
                    .then(function (response) {
                        return response.json()
                    })
                    .then(function (data) {
                        console.log(data);
                        var contenedorfavoritos = document.querySelector(".listafavoritos")

                        contenedorfavoritos.innerHTML += `
                        <a href="detail.html?tipo=serie&id=${data.id}">
                            <li class = "imfv">
                                <img src="${linkimagen}${data.poster_path}" alt="">
                            </li>
                        <a/>
                        `
                    })
                    .catch(function (error) {
                        console.log('El error fue: ' + error);
                    })
            }
        }
    }

    var user = localStorage.getItem("UserName")

    var txtSal = document.querySelector(".saludox")
    if (user) {
        txtSal.innerHTML += `<h2> ${user}, estos son tus favoritos </h2>`
    } else {
        txtSal.innerHTML += `<h2>Usuario inicie sesión por favor</h2>`
    }

})















