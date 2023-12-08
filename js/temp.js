let clima={
    apikey:"45a039765624287fe8cfe9921d151db3",
    fetchClima:function(ciudad){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + ciudad 
            + "&units=metric&appid="
            + this.apikey
        )
        .then((Response)=>{
            return Response.json();
        } )
        .then((data)=> this.mostrarClima(data));
        },
        mostrarClima:function(data){
            const {temp} = data.main;
            document.querySelector("#temp").innerHTML= temp + "     &#8451;"
        }
}
let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change",function(){
    clima.fetchClima(ciudad.value)
})

clima.fetchClima("cordoba");