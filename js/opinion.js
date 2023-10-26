    const {createApp } = Vue
    createApp({
    methods: {
        marcar(obj){
            
        // obj => calificacion
        document.getElementById("valorEstrellas").value = obj;
        console.log(obj);
        

        },
        obtenerTexto(){
            // console.log("obtenerTexto");
                
            if (document.getElementById("valorEstrellas").value == "0"){
                console.log("entro aca 1"+ document.getElementById("valorEstrellas").value );
                 alert("Debe asignar una valoración");
            
            } else if (document.getElementById("mensaje_op").value == ''){      
                console.log("entro aca 2"+document.getElementById("mensaje_op").value);
                alert("Debe asignar una una opinion para su valoración ");

            } else {
                var valor = document.getElementById("valorEstrellas").value;
                var text = "Valoración: "+ valor + " ★ -  Comentario: " + this.$refs.text.value;
                const textField     = this.$refs.textField;
                textField.innerHTML = `${textField.innerHTML}<br>${text}`;

                // console.log(textField); 

                this.$refs.text.value = "";
                // document.getElementsByName("lblestrellas").forEach(element => {
                //     element.style.color="grey";
                // });
                document.getElementById("valorEstrellas").value = "0";
            }
            confirm("Gracias por tus comentarios.");

            //--------------andando
            // var valor = document.getElementById("valorEstrellas").value;
            // var text          = this.$refs.text.value;
            // text += "Valoracion: "+ valor + " ★";
            // const textField     = this.$refs.textField;
            // textField.innerHTML = `${textField.innerHTML}<br>${text}`;
            // this.$refs.text.value = "";
            // document.getElementById("valorEstrellas").value = "0";
        }
        
        

    }

}).mount("#contenido_op");