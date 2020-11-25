window.addEventListener('load', function () {
    var apiKey = `e8659a3dae8d207d31ba4797c06188c8`
    var linkimagen = "https://image.tmdb.org/t/p/w500"
    

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