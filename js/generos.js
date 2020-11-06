window.onload = function () {

    var key = `e8659a3dae8d207d31ba4797c06188c8`

    var linkimagen = "https://image.tmdb.org/t/p/w500"

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (information) {
            console.log(information);

            var ul = document.querySelector(".ac")

            for (let i = 0; i < information.geners.length; i++) {
                var element = information.geners[i];
                ul.innerHTML += `
            <li>
            <img src="${linkimagen}${element.__proto__}" alt="">
            </li>`
            }
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })

};