window.addEventListener('load' ,function(){

    var apikey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;

    queryString = new URLSearchParams(queryString);
  
    var buscador = document.querySelector (".buscador");

    var resultados = queryString.get(".resultados");


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US&query=${resultados}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        var arrayDePeliculas = data.results;


        for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index];
            console.log (element.media_type)

            if (element.media_type == "tv" || element.media_type == "movie") {
                buscador.innerHTML += `
            
                <a href="index.html?id= ${element.id}"> 
                <h2>${element.original_title}</h2>
                </a>
    
                <img src="${linkimagen}${element.poster_path}" alt="">
                ` ;
                
            }  
            
    
        }


    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    





})