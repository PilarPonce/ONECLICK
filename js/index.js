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
    }
