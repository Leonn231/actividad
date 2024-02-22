let email = "john.doe@example.com";
let claveBase = "s123*";
let emailIngresado = "john.doe@example.com";
let claveIngresada = "s123*";
let nombreUsuario = "John Doe";

if(emailIngresado == email && claveIngresada == claveBase){
    console.log(`¡Bienvenido/a ${nombreUsuario}!, seleccione opciones del sistema.`);
} else{
    console.log("Acceso denegado.");
}