window.addEventListener('load' ,function(){

    fetch(`//https://api.themoviedb.org/3/movie/550?api_key=e8659a3dae8d207d31ba4797c06188c8`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        data.results.forEach(actor => {
            document.querySelector('#Acción').innerHTML += `<Accion2 uk-position-relative uk-visible-toggle uk-light">
                   <img src="${urlImagen}" alt="">
                   <h3 class="uk-card-title uk-text-center">${actor.name}</h3>
                  <p class="uk-text-center">${actor.popularity}</p>
                </div>`

                // LA VARIABLE "urlImagen" ESTA DEFINIDA EN EL ARCHIVO ATAJOS.JS
        });

    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    

})