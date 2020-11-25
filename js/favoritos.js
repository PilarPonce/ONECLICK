window.addEventListener('load', function () {
    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"
    
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
        arrayDeFavoritos.push ({
            tipo: tipo,
            id: id
        });

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

    /*var favoritos = document.querySelector(".estrella")
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
    })*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var queryString = location.search; 
    var queryStringObj = new URLSearchParams(queryString);
    var id = queryStringObj.get("id");
    var tusFavoritos = document.querySelector(".tusFavoritos")
    var favoritos = JSON.parse(localStorage.getItem("favoritos"))
    if (favoritos === null || favoritos.length === 0) { //triple no es solo contenido de la variable sino que del tipo de dato
        //si favs esta vacio le aviso al usuario que esta vacio
    } else {
        //for de favoritos
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
        }
    }
})