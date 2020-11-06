window.onload = function () {

    var Apikey = `e8659a3dae8d207d31ba4797c06188c8`

    var linkimagen = "https://image.tmdb.org/t/p/w500"

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (information) {
            console.log(information);

            var ul = document.querySelector(".acc")

            for (let i = 0; i < information.results; i++) {
                var element = information.results[i];
                ul.innerHTML += `
                 < li >
                    <img src="${linkimagen}${element}" alt=""> > 
                    <div class="uk-position-center uk-panel">
                </li> `
            }


        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })

};