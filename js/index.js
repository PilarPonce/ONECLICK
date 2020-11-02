window.onload = function (){
    fetch("//https://api.themoviedb.org/3/movie/550?api_key=e8659a3dae8d207d31ba4797c06188c8l") 
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            
        })
        .catch(function(mensajeError){
            console.log(`hubo un error: ${mensajeError}`);
        });
};
