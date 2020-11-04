window.onload = function (){

    var key = `e8659a3dae8d207d31ba4797c06188c8`

    fetch("//https://api.themoviedb.org/3/movie/550?api_key=e8659a3dae8d207d31ba4797c06188c8l") 
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data);
            
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                
            }
        })

        .catch(function(mensajeError){
            console.log(`hubo un error: ${mensajeError}`);
        });

};
