window.onload = function (){ 


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


        fetch(``)
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