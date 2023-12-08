console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            descripcion: "",
            calificacion: 0,
            url: 'http://localhost:5000/GetCalificaciones/' + id,
            url_upd: 'http://localhost:5000/UpdCalificaciones/' + id,
            // url: 'https://comision23541.pythonanywhere.com/productos/' + id,
        }
    },
    methods: {
        marcar(obj){
            
            // obj => calificacion
            document.getElementById("valorEstrellas").value = obj;
            console.log(obj);
            
            },
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;                  
                    this.descripcion = data.descripcion
                    this.calificacion = data.calificacion

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        validarcampos(){
            document.getElementById("bandera").value = "0"

            if (document.getElementById("nombre").value == ''){      
                // console.log("entro aca 2"+document.getElementById("nombre").value);
                alert("Debe ingresar un nombre en su valoración ");
                document.getElementById("bandera").value = "1"
                    
            } else if (document.getElementById("descripcion").value == ''){      
                console.log("entro aca 2"+document.getElementById("descripcion").value);
                alert("Debe asignar una descripción a su valoración ");
                document.getElementById("bandera").value = "1"
            
            }else if (document.getElementById("valorEstrellas").value == "0"){
                // console.log("entro aca 1"+ document.getElementById("valorEstrellas").value );
                alert("Debe colocar una valoración");
                document.getElementById("bandera").value = "1"
           
                    }
            else if (document.getElementById("valorEstrellas").value < "0" || document.getElementById("valorEstrellas").value > "5"){
                // console.log("entro aca 1"+ document.getElementById("valorEstrellas").value );
                alert("Debe colocar una valoración entre 1 y 5");
                document.getElementById("bandera").value = "1"

                }
        },
        modificar() {

            this.validarcampos();
            if (document.getElementById("bandera").value == "0"){
                let calificacion = {
                    nombre: document.getElementById('nombre').value,
                    descripcion: document.getElementById('descripcion').value,
                    calificacion: document.getElementById('valorEstrellas').value,
                }
                var options = {
                    body: JSON.stringify(calificacion),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url_upd, options)
                    .then(function () {
                        alert("Registro modificado")
                        window.location.href = "./opinion_crud.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Modificar")
                    })
            }
        }
    },
    created() {
        this.fetchData(this.url)

    },
}).mount('#app')