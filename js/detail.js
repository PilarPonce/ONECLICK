window.onload = function (){ 

    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);

    var id = queryStringObj.get ("id");
    var tipo = queryStringObj.get ("tipo");
    console.log(tipo);

    if (tipo == "serie") {
        contenidoTv (id);
        
    } else if (tipo == "pelicula") {
        contenidoPelicula (id);
        
    } else {
        contenidoGeneros (id)
    }

    function contenidoPelicula (id){
        document.querySelector('.tv').style.display = "none";
        document.querySelector('.generos').style.display = "none";
        
    
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            var pelicula = document.querySelector (".pelicula")
                pelicula.innerHTML += `
            
                <div class=" cajaprincipal uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                    <div class=" detalleimg uk-card-media-left uk-cover-container">
                        <img class="imagen" src="${linkimagen}${data.poster_path}" alt="" uk-cover>
                    </div>
                    <div>
                        <div class=" cajainfo uk-card-body">
                            <h3 class=" titulo uk-card-title">${data.title}</h3>  
                            <h5 class="promedioVotos"> Promedio de votos: ${data.vote_average} </h5>
                            <p class="descripcion">${data.overview}</p>
                            
                        </div>
                    </div>
                </div>
    
               `
            })
            .catch(function (error) {
            console.log('El error fue: ' + error);
        })
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            var pelicula = document.querySelector (".pelicula")
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
                    <div class="uk-card-body">
                        ${resena}
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
               `
            })
            .catch(function (error) {
            console.log('El error fue: ' + error);
        })
    
    }

    
    function contenidoTv (id){

        document.querySelector('.pelicula').style.display = "none";
        document.querySelector('.generos').style.display = "none";


        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            var tv = document.querySelector (".tv")
            var seriegenero = "";
            for (let i = 0; i < data.genres.length; i++) {
                const element = data.genres[i];
                seriegenero +=`<p class="generoDetalle"> ${element.name} </p>`
            }
            
            
            tv.innerHTML += `
            
            <div class= "cajaprincipal">
                <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class=" detalleimg uk-card-media-left uk-cover-container">
                <img class="imagen" src="${linkimagen}${data.poster_path}" alt="" uk-cover>
                </div>
                <div>
                    <div class=" cajainfo uk-card-body">
                        <h3 class=" titulo uk-card-title">${data.name}</h3>   
                        ${seriegenero}
                        <h4 class="promedioVotos">Fecha de salida: ${data.last_air_date}</h4>
                        <p class="descripcion">${data.overview}</p>
                    </div>
                </div>
            </div>
            `


        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })


        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            var tv = document.querySelector (".tv")
            var resena = "";
            var autor = "";
            for (let i = 0; i < data.results.length; i++) {
                const element = data.results[i];
                resena += `<p>${element.content}</p>`
                autor += `${element.author}`
            }
            
                tv.innerHTML += `
        
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
                    <div class="uk-card-body">
                        ${resena}
                    </div>
                    <div class="uk-card-footer">
                        <a href="#" class="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
               `
            })
            .catch(function (error) {
            console.log('El error fue: ' + error);
        })
    }


//---------GENEROS DETAIL------------------------------------------------------
    
    function contenidoGeneros(id) {
        document.querySelector('.pelicula').style.display = "none";
        document.querySelector('.tv').style.display = "none";


        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            var generos = document.querySelector(`.generos`);

            generos.innerHTML += `
            <div class="titulo">

            </div>
            <div class="div">
    
            </div>
            
            `

            })
            .catch(function (error) {
            console.log('El error fue: ' + error);
        })

        
    }
    
    var favoritos = document.querySelector(".estrella")
    favoritos.addEventListener ("click", function (){
        alert("apretaste el boton!")
        var favs = localStorage.getItem("favoritos") //trae string correspondieente al lugar favoritos
        var arrayDeFavoritos = "";
        if (favs === null) {
            arrayDeFavoritos = [];
        } else {
            arrayDeFavoritos = JSON.parse(favs) //lo hace objeto para poder manipularlo
        }
        const indexMovieID = arrayDeFavoritos.indexOf(id); //busca id de la pelicula. find element in array js es el 3 link
        if (indexMovieID !== -1) { //se fija si la pelicula esta o no. -1 es si no existe
            arrayDeFavoritos.push(id) //agrega a favs
        } else {
            arrayDeFavoritos.splice(indexMovieID, 1) //saca. el 1 es cuantas borro desde esa posicion.
        }
        localStorage.setItem("favoritos",JSON.stringify(arrayDeFavoritos))
    })
    /*
    var estrella = document.querySelector (“.estrella”)
    estrella.addEventListener (“click”, function () {
        if(estrella.style.backgroundColor == “yellow”) {
        estrella.style.backgroundColor == “white”
    }   else {
        estrella.style.backgroundColor == “yellow”
    }
})*/
   // array.splice (1,1 )
    //ELIMINAR FAVORITOS se ponen los numeros que queres sacar del array.

   

}