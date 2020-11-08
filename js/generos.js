window.onload = function () {

    var key = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

//-----------ACCION-------------------------------------------------------------------------------
//    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
/*        .then(function (response) {
            return response.json()
        })
        .then(function (information) {
            console.log(information);

            var ul = document.querySelector(".acc")

            for (let i = 0; i < information.geners.length; i++) {
                var element = information.geners[i];
                ul.innerHTML += `
            <li>
            <img src="${linkimagen}${element.__proto__}" alt="">
            </li>`
            }
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })
        */
//---------------ROMANTICAS----------------------------------------------------------------------------

    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`)
    .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(information) {
        console.log(information);

        var ul = document.querySelector (".contenedor-romanticas")
    
        for (let i = 0; i < information.results.length; i++) 
            var element = information.results[i];{
          document.querySelector(".contenedor-romanticas").innerHTML += 
          ul.innerHTML  += `
          <li>
          <img src="${linkimagen}${element.poster_path}" alt="">
          </li>` 
        }
    })

      .catch(function (error) {
        console.log('El error fue: ' + error);
    })

    //----------------TERROR------------------------------------------------------
    fetch (`https://api.themoviedb.org/3/discover/movie?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53`)
    .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(information) {
        console.log(information);

        var ul = document.querySelector (".contenedor-terror")
    
        for (let i = 0; i < information.results.length; i++) 
            var element = information.results[i];{
          document.querySelector(".contenedor-terror").innerHTML += 
          ul.innerHTML  += `
          <li>
          <img src="${linkimagen}${element.poster_path}" alt="">
          </li>` 
        }
    })

      .catch(function (error) {
        console.log('El error fue: ' + error);
    })
    //--------------INDEX------------------------------------------------------------
    /*fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
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
*/
    }