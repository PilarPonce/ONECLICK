window.onload = function (){

    var key = `e8659a3dae8d207d31ba4797c06188c8`

    //https://developers.themoviedb.org/3/movies/get-top-rated-movies

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

};
