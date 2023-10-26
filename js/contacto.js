var nombre= document.getElementById('nombre');
var apellido= document.getElementById('apellido');
var edad= document.getElementById('edad');
var error= document.getElementById('error');
// error.style.color='red';

console.log("entre en el js");
console.log(error);

function validarCampos(){
console.log("entro a validar campos");

var mensajeerror=[];
if (nombre.value === null || nombre.value ===''){
    mensajeerror.push('Ingresa tu nombre');
    console.log("Entre en el primer if");
}

if (apellido.value === null || apellido.value ===''){
    mensajeerror.push('Ingresa tu apellido');
    console.log("Entre en el segundo if");

}

console.log(mensajeerror);
document.getElementById('error').hidden = false;
document.getElementById('error').value = mensajeerror.join(', ');
return false;
}