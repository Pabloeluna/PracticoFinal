const { createApp } = Vue
createApp({
    data() {
        return {
            Calificaciones: [],
            // url:'http://localhost:5000/Calificaciones',
            url:'https://pabloeluna.pythonanywhere.com/Calificaciones',
            // url_alta:'http://localhost:5000/AltaCalificaciones',
            url_alta:'https://pabloeluna.pythonanywhere.com/AltaCalificaciones',
            // url_del:'http://localhost:5000/DelCalificaciones',
             url_del:'https://pabloeluna.pythonanywhere.com/DelCalificaciones',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            //url: 'https://comision23541.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            descripcion: "",
            calificacion: 0,
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
                    this.Calificaciones = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(calificacion) {
            const url = this.url_del + '/' + calificacion;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Registro Eliminado correctamente")
                    location.reload();
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
        grabar() {
            this.validarcampos();
            if (document.getElementById("bandera").value == "0"){
                let calificacion = {
                    nombre: document.getElementById('nombre').value,
                    descripcion: document.getElementById('descripcion').value,
                    calificacion: document.getElementById('valorEstrellas').value,
                }
                var options = {
                    body: JSON.stringify(calificacion),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url_alta, options)
                    .then(function () {
                        alert("Registro grabado")
                        window.location.href = "./opinion.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabarr")
                    })
                }
            }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')