var apellido= document.getElementById('apellido');
var email= document.getElementById('email');
var asunto= document.getElementById('asunto');
var mensaje= document.getElementById('mensaje');
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

if (email.value === null || email.value === ''){
    mensajeerror.push('Ingresa tu email');
    console.log("Entre en el tercer if");
}

if (asunto.value === null || asunto.value === ''){
    mensajeerror.push('Ingrese un asunto');
    console.log("Entre en el cuarto if");
}

if(mensaje.value === null || mensaje.value === ''){
    mensajeerror.push('Ingrese un mensaje');
    console.log("Entre en el quinto if");

}


console.log(mensajeerror);
document.getElementById('error').hidden = false;
document.getElementById('error').value = mensajeerror.join(', ');
return false;
}