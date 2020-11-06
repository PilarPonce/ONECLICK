window.onload = function (){

    var apiKey= `e8659a3dae8d207d31ba4797c06188c8`

    var linkimagen = "https://image.tmdb.org/t/p/w500"

//--------------------------------------------------------------------------------

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
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
            <img src="${linkimagen}${element.poster_path}" alt="">
            </li>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })

//--------------------------------------------------------------------------------

    fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".continuar")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <li>
            <img src="${linkimagen}${element.poster_path}" alt="">
            </li>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })

//--------------------------------------------------------------------------------

    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".ten")

        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <li>
                <div class=" imten uk-panel">
                <img src="${linkimagen}${element.poster_path}" alt="">
                    
                </div>
            </li>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })

//--------------------------------------------------------------------------------
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".generos2")

        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <li>
                <div class=" generos3 uk-panel">
                <img src="${linkimagen}${element.id}" alt="">
                    <a href="movieDetail.html"> <img src="imagenes/accion/1.jpg" alt=""> 
                    <div class=" cajatext uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <p class="uk-margin-remove"></p> </a>
                    </div>
                </div>
            </li>
           
            ` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })


};
