window.onload = function () {

    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);  //

    var id = queryStringObj.get("id");
    var tipo = queryStringObj.get("tipo");


    if (tipo == "serie") {
        contenidoTv(id);

    } else if (tipo == "pelicula") {
        contenidoPelicula(id);

    } else {
        contenidoGeneros(id)
    }

    function contenidoPelicula(id) {
        document.querySelector('.tv').style.display = "none";
        document.querySelector('.generos').style.display = "none";


        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

                var pelicula = document.querySelector(".pelicula")
                pelicula.innerHTML += `
            
                <div class=" cajaprincipal uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s  uk-margin" uk-grid>
                    <div class=" detalleimg uk-card-media-left uk-cover-container">
                        <img class="imagen" src="${linkimagen}${data.poster_path}" alt="" uk-cover>
                    </div>
                    <div>
                        <div class=" cajainfo uk-card-body">
                            <h3 class=" titulo uk-card-title">${data.title}</h3> 
                            <a href="#" role="button" class="estrella" uk-icon="star; ratio: 5"></a>
                            <a href="#" role="button" class="eliminar" uk-icon="trash"></a>
                            <h5 class="promedioVotos"> Promedio de votos: ${data.vote_average} </h5>
                            <p class="descripcion">${data.overview}</p>
                            
                        </div>
                    </div>
                </div>
    
               `
                //el role = button y el #: esto es un boton no un link, no me lleves a otro lado
            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

        //REVIEWS MOVIE (en peliculas hay seccion peliculas reviews)
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

                var pelicula = document.querySelector(".pelicula")
                var resena = "";
                var autor = "";
                for (let i = 0; i < data.results.length; i++) {
                    const element = data.results[i];
                    resena += `<p>${element.content}</p>`
                    autor += `${element.author}`
                }

                pelicula.innerHTML += `
        
                <div class=" resenastotal uk-card uk-card-default uk-width-1-2@m ">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="40" height="40" src="imagenes/imagenesBarraNav/Logo.jpg">
                            </div>
                            <div class="uk-width-expand">
                                <h3 class=" resenas uk-card-title uk-margin-remove-bottom">Reseñas</h3>
                                <p class=" uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">Autor de reseña: ${autor}</time></p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-body 1">
                        <p> ${resena} </p>
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
               `
                configurarFavoritos(tipo, id);
            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

        //TRAILER PELI
        //https://stackoverflow.com/questions/21845089/get-youtube-video-id-from-embed-iframe-code
        //Buscamos embedyoutubeidvideo (como meter videos de youtube en mi pagina)
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                var videoHolder = document.querySelector(`.videoholder`)
                var youtubeKey = data.results[0].key
                if (youtubeKey) {
                    videoHolder.innerHTML += `
                    <h2> Videos relacionados: </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeKey}?rel=0" frameborder="0" allowfullscreen></iframe>
                    `
                }

            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

    }


    function contenidoTv(id) {

        document.querySelector('.pelicula').style.display = "none";
        document.querySelector('.generos').style.display = "none";


        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&page=1`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

                var tv = document.querySelector(".tv")
                var seriegenero = "";
                for (let i = 0; i < data.genres.length; i++) {
                    const element = data.genres[i];
                    seriegenero += `<p class="generoDetalle"> ${element.name} </p>`
                }


                tv.innerHTML += `
            
            <div class= "cajaprincipal">
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class=" detalleimg uk-card-media-left uk-cover-container">
                <img class="imagen" src="${linkimagen}${data.poster_path}" alt="" uk-cover>
                </div>
                <div>
                    <div class=" cajainfo uk-card-body">
                        <h3 class=" titulo uk-card-title">${data.name}</h3>  <a href="#" role="button" class="estrella" uk-icon="star"></a>
                        <a href="#" role="button" class="eliminar" uk-icon="trash"></a>
                        <a href="generos.html" class = "gnrs"> ${seriegenero}</a>
                        <h4 class="promedioVotos">Fecha de salida: ${data.last_air_date}</h4>
                        <p class="descripcion">${data.overview}</p>
                    </div>
                </div>
            </div>
            `

                configurarFavoritos(tipo, id);

            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })

        //TRAILER PELI
        //https://stackoverflow.com/questions/21845089/get-youtube-video-id-from-embed-iframe-code
        //Buscamos embedyoutubeidvideo (como meter videos de youtube en mi pagina)
        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=e8659a3dae8d207d31ba4797c06188c8&language=en-US`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);
                var videoHolder = document.querySelector(`.videoholder`)
                var youtubeKey = data.results[0].key
                if (youtubeKey) {
                    videoHolder.innerHTML += `
                <h2> Videos relacionados: </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeKey}?rel=0" frameborder="0" allowfullscreen></iframe>
                `
                }

            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })
    }



    //generos detail
    function contenidoGeneros(id) {
        document.querySelector('.pelicula').style.display = "none";
        document.querySelector('.tv').style.display = "none";

        var tituloGenero = document.querySelector('.titulogenero')
        var tituloVista = "";


        switch (id) {
            case `28`:
                tituloVista = "Acción";
                break;
            case `10749`:
                tituloVista = "Románticas";
                break;
            case `35`:
                tituloVista = "Comedias";
                break;
            case `18`:
                tituloVista = "Dramas";
                break;
            case `53`:
                tituloVista = "Terror";
                break;

            default:
                tituloVista = ``
                break;
        }

        tituloGenero.innerHTML = `${tituloVista}`

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data);

                var generos = document.querySelector(".listageneros");

                for (let i = 0; i < data.results.length; i++) {
                    const element = data.results[i];

                    generos.innerHTML += `
                    <a href="detail.html?tipo=pelicula&id=${element.id}">
                    <li>
                        <img class = "fotodet" src="${linkimagen}${element.poster_path}" alt="">
                    </li>
                    <a/>
                    `
                }

            })
            .catch(function (error) {
                console.log('El error fue: ' + error);
            })
    }





}

const configurarFavoritos = function (tipo, id) {
    //favs
    var favs = localStorage.getItem("favoritos") //trae string correspondiente al lugar favoritos
    var favoritos = document.querySelector(".estrella")
    var sacar = document.querySelector(".eliminar")
    var arrayDeFavoritos = "";

    if (favs === null) {
        arrayDeFavoritos = [];
    } else {
        arrayDeFavoritos = JSON.parse(favs) //lo hace objeto para poder manipularlo
    }

    for (let i = 0; i < arrayDeFavoritos.length; i++) { //este for hace que por cada favorito en favoritos se fija si esta y dependiendo de si esta o no, muestra un boton o el otro
        const element = arrayDeFavoritos[i];
        if (element.id == id) {
            sacar.style.display = "block";
            favoritos.style.display = "none";
            break; //me saca del for incluso si no termine la condicion. Lo hago porque si ya encontre el favorito, no tengo que seguir buscandolo
        } else {
            sacar.style.display = "none";
            favoritos.style.display = "block";
        }
    }

    if (arrayDeFavoritos.length === 0) { //si un array esta vacia, la longitud del array es 0, osea estoy seguro que no esta en favoritos, muestro el de agregar (estrellita)
        sacar.style.display = "none";
        favoritos.style.display = "block";
    }

    favoritos.addEventListener("click", function () { //cuando agrego, muestra que lo agregue, cambia el boton
        alert("Lo agregaste a favoritos!")

        sacar.style.display = "block";
        favoritos.style.display = "none";

        arrayDeFavoritos.push({ //aca agrego un objeto a mis favoritos
            tipo: tipo, //le estoy agregando un elemento a mi objeto con el identificador "tipo" con el valor de esa variable
            id: id //le estoy agregando un elemento a mi objeto con el identificador "id" con el valor de esa variable
        });

        localStorage.setItem("favoritos", JSON.stringify(arrayDeFavoritos)) //agarro nuevos favoritos y la guardo en el local storage. El stringify convierte el objeto de java script en un string
    })

    sacar.addEventListener("click", function () { //cuando clickeo, 
        alert("Lo sacaste de favoritos!")
        sacar.style.display = "none";
        favoritos.style.display = "block";
        for (let i = 0; i < arrayDeFavoritos.length; i++) { //me fijo en todos los favoritos cual es la posicion de mi fav que quiero borrar y cuando coinciden los id, los borro
            const element = arrayDeFavoritos[i];
            if (element.id == id) {
                arrayDeFavoritos.splice(i, 1); //aca digo que en i borre 1 elemento.
                localStorage.setItem("favoritos", JSON.stringify(arrayDeFavoritos))
            }
        }
    })

}