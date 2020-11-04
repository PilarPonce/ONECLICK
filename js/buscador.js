window.addEventListener('load' ,function(){

    var key = `e8659a3dae8d207d31ba4797c06188c8`

    fetch(`//https://api.themoviedb.org/3/movie/550?api_key=e8659a3dae8d207d31ba4797c06188c8`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);


    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    





})