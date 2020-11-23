window.addEventListener('load' ,function(){

    var apiKey = `e8659a3dae8d207d31ba4797c06188c8` 
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get ("id");

    var jsonFavoritas = localStorage.getItem("peliculasFav")

    var tusFavoritos = document.querySelector (".tusFavoritos")

    var favoritos = JSON.parse (localStorage.getItem ("favoritos"))

    for (let i = 0; i < favoritos.length; i++) {
        const element = favoritos [i];
        console.log (element)
    }


    if (tipo == "pelicula") {
        fetch(`https://api.themoviedb.org/3/movie/${element.id}?api_key=${apikey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (Object) {
            console.log(Object);
    
            tusFavoritos.innerHTML += `
                <div>
                    <a href="detail.html?tipo${Object.media_type}&id=${Object.id}"> <img src="${linkimagen}${element.backdrop_path}" alt=""></a>
                </div>
            
            `
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })
    } if (tipo == "serie") {
        fetch(`https://api.themoviedb.org/3/tv/${element.id}?api_key=${apikey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (Object) {
            console.log(Object);
    
            tusFavoritos.innerHTML += `
                <div>
                    <a href="detail.html?tipo${Object.media_type}&id=${Object.id}"> <img src="${linkimagen}${element.backdrop_path}" alt=""></a>
                </div>
            
            `
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })
        
    } else {
        
    }
  



})