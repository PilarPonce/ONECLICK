window.onload = function (){

    var apiKey= `e8659a3dae8d207d31ba4797c06188c8`

    var linkimagen = "https://image.tmdb.org/t/p/w500"

//-------------GENEROS BARRA NAV PELICULAS---------------------------
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        var listageneros = document.querySelector (".listageneros-pelis")


        for (let i = 0; i < data.genres.length; i++) {
            var element = data.genres[i];
            var listageneros = document.querySelector (".listageneros-pelis")

            ul.innerHTML  += `
            <li>
            <a href="generos.html?tipo=movie&id=${element.id}">
            <p> ${element.name} </p>
            </a>
            </li>
                ` 
            console.log (element)
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })

//-------------------------RECOMENDADO-------------------------------------------------------
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".recomendados")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            
                <li>
                <a href="detail.html?tipo=serie&id=${element.id}">
                <img src="${linkimagen}${element.poster_path}" alt="">
                </a>
                </li>
            ` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })


//----------------------------------CONTINUAR----------------------------------------------
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".continuar")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                <li>
                <img src="${linkimagen}${element.poster_path}" alt="">
                </li>
            </a>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
//--------------------------------TOP 10------------------------------------------------
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".ten")

        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                <li>
                    <div class=" imten uk-panel">
                    <img src="${linkimagen}${element.poster_path}" alt="">
                    </div>
                </li>
            </a>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    }



