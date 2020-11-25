window.addEventListener('load' ,function(){

   document.getElementById (`loader`).classList.toggle(`loader2`)

    var apikey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;

    queryString = new URLSearchParams(queryString);
  
    var buscador = document.querySelector (".buscador");

    var loQueBuscoElUsuario = queryString.get("inputbuscador");


    fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&language=en-US&query=${loQueBuscoElUsuario}&page=1&include_adult=false`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        var arrayDePeliculas = data.results;

        var ul = document.querySelector (".listapelis")

        for (let index = 0; index < data.results.length; index++) {
            const element = data.results[index];
            console.log (element.media_type)

            if (element.media_type == "tv") {
                ul.innerHTML += `

                <li> 
                <a href="detail.html?tipo=serie&id=${element.id}"> 
                <img src="${linkimagen}${element.poster_path}" alt="">
                </a>
                </li>
                
                `
            }  if (element.media_type == "movie") {
                ul.innerHTML += `

                <li> 
                <a href="detail.html?tipo=pelicula&id=${element.id}"> 
                <img src="${linkimagen}${element.poster_path}" alt="">
                </a>
                </li>`
            } 
        }


    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    





})