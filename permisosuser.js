let usuario = "invitado";
let permisos = ["administrador", "editor", "invitado"];

if(permisos.includes(usuario)){
    console.log("El usuario tiene permiso para acceder a la página.");
} else{
    console.log("El usuario no tiene permiso para acceder a la página.");
}
