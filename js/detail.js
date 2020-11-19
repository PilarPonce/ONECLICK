window.onload = function (){ 

    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    
    var id = 150; //no sabemos cual es el id
    var tipo = serie;

    if (tipo == "serie") {
        contenidoSerie (id);
        
    } else {
        contenidoPelicula (id)
    }

    function contenidoSerie (id){

        var serie = document.querySelector (".serie");

        serie.style.display = "none";


        fetch(`https://api.themoviedb.org/3/movie` + id + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);


        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })


    }


    function contenidoPelicula (id){

        var pelicula = document.querySelector (".pelicula");

        pelicula.style.display = "none";
        serie.style.display = "block";


    }




}