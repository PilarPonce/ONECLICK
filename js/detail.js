window.onload = function (){ 

    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var id = queryStringObj.get ("id");
    var tipo = queryStringObj.get ("tipo");
    console.log(tipo);

    if (tipo == "serie") {
        contenidoSerie (id);
        
    } else if (tipo == "pelicula") {
        contenidoPelicula (id);
        
    } else {
        contenidoGeneros (id)
    }

    function contenidoSerie (id){

        var serie = document.querySelector (".serie");
    
        serie.style.display = "none";
        generos.style.display = "none";
    
    
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            var pelicula = document.querySelector (".pelicula")

            for (let i = 0; i < information.results.length; i++) {
                var element = information.results[i];
                pelicula.innerHTML += `
            
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img class="imagen" src="${linkimagen}${element.poster_path}" alt="" uk-cover>
                        <canvas width="600" height="400"></canvas>
                    </div>
                    <div>
                        <div class="uk-card-body">
                            <h3 class=" titulo uk-card-title">Media Left</h3>
                            <p class="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <p class="promedioVotos"> </p>
                        </div>
                    </div>
                </div>
        
                <div class="uk-card uk-card-default uk-width-1-2@m ">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="40" height="40" src="IMAGENES/footer/fotoavatar.jpg">
                            </div>
                            <div class="uk-width-expand">
                                <h3 class=" resenas uk-card-title uk-margin-remove-bottom">Reseñas</h3>
                                <p class=" uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
               `
            }   
    
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })
    
    }

    
    function contenidoPelicula (id){

        var pelicula = document.querySelector (".pelicula");

        pelicula.style.display = "none";
        serie.style.display = "block";
        generos.style.display = "none";



        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US`)
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

    function contenidoGeneros (id) {

        var generos = document.querySelector (".generos");

        pelicula.style.display = "none";
        serie.style.display = "none";
        generos.style.display = "block";

        
    }
}