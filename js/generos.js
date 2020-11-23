window.onload = function () {
// link con nro generos https://developers.themoviedb.org/3/genres/get-movie-list
// link https://developers.themoviedb.org/3/discover/movie-discover
    var apikey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

   
    //-------------------------BANNER-------------------------------------------------------

    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);

        var ul = document.querySelector (".bannerimgm")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <li>
            <img src="${linkimagen}${element.backdrop_path}" alt="">
            </li>` 
        }
    })
    .catch(function (error) {
        console.log('El error fue: ' + error);
    })

    //---------------ACCION---------------------------------------------------------
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);
        var peliculas = information.results

        var ul = document.querySelector(".contenedor-accion")

        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i]; 
            ul.innerHTML += `
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
//---------------DRAMAS-------------------------------------------------
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`)
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);
        var peliculas = information.results

        var ul = document.querySelector(".contenedor-dramas")

        for (let i = 0; i < information.results.length; i++){
            var element = information.results[i]; 
            ul.innerHTML += `
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                <li>
                <img src="${linkimagen}${element.poster_path}" alt="">
                </li>
            <a/>`
        }
    })

    .catch(function (error) {
        console.log('El error fue: ' + error);
    })

//---------------COMEDIAS--------------------------------------------------
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`)
        .then(function (response) {
            return response.json()
        })
        .then(function (information) {
            console.log(information);
            var peliculas = information.results

            var ul = document.querySelector(".contenedor-comedias")

            for (let i = 0; i < information.results.length; i++) {
                var element = information.results[i]; 
                ul.innerHTML += `
                <a href="detail.html?tipo=pelicula&id=${element.id}">
                    <li>
                    <img src="${linkimagen}${element.poster_path}" alt="">
                    </li>
                <a/>`
            }
        })

        .catch(function (error) {
            console.log('El error fue: ' + error);
        })
//---------------ROMANTICAS----------------------------------------------------------------------------

    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`)
   
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);
        var peliculas = information.results

        var ul = document.querySelector (".contenedor-romanticas")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                <li>
                <img src="${linkimagen}${element.poster_path}" alt="">
                </li>
            <a/>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })

    //----------------TERROR------------------------------------------------------
    
    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53`)
   
    .then(function (response) {
        return response.json()
    })
    .then(function (information) {
        console.log(information);
        var peliculas = information.results

        var ul = document.querySelector (".contenedor-terror")


        for (let i = 0; i < information.results.length; i++) {
            var element = information.results[i];
            ul.innerHTML  += `
            <a href="detail.html?tipo=pelicula&id=${element.id}">
                <li>
                <img src="${linkimagen}${element.poster_path}" alt="">
                </li>
            <a/>` 
        }
    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
     
    }