window.addEventListener('load' ,function(){

    var apikey = `e8659a3dae8d207d31ba4797c06188c8`

    var queryString = location.search

    queryString = new URLSearchParams(queryString)
  
    var resultados = queryString.get("buscador")

    var busqueda = document.querySelector (".busqueda")
  


    fetch(`https://api.themoviedb.org/3/search/company?api_key=e8659a3dae8d207d31ba4797c06188c8&page=1&${resultados}`   )
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            busqueda.innerHTML += `
            
            <a href="index.html?id= ${element.id}"> 
            <h2>${element.name}</h2>
            </a>

            <img src="${element.logo_path}" alt="">

            `
            
        }


    })
    .catch(function (error) {
         console.log('El error fue: ' + error);
     })
    





})