window.addEventListener('load', function () {
    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"


    var queryString = location.search; 
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get("id");

    var tusFavoritos = document.querySelector(".todofavoritos")
    var favoritos = JSON.parse(localStorage.getItem("favoritos"))
    console.log (favoritos)

    if (favoritos === null || favoritos.length === 0) { //triple no es solo contenido de la variable sino que del tipo de dato
        console.log("TODAVIA NO HAY FAVS")                                              //si favs esta vacio le aviso al usuario que esta vacio
    } else {
                                                   //for de favoritos
        for (let i = 0; i < favoritos.length; i++) {
            const element = favoritos[i];
            console.log(element)
        
        fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            var contenedorfavoritos = document.querySelector (".listafavoritos")
            
            contenedorfavoritos.innerHTML += ` 
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                    <li>
                        <img src="${linkimagen}${element.poster_path}" alt="">
                    </li>
                    <a/>
            `
            })
        
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })

        }
    }
})