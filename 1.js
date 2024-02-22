let edad = 9;
edad >= 18 ? console.log("Es mayor de edad.") : console.log("Es menor de edad.");

let numero = -3;
numero > 0 ? console.log("Número positivo") : console.log("Número negativo");

let ocupacionCancha = true;
let nombreCancha = "Bernabéu";
let mensaje = ocupacionCancha ? `La cancha llamada ${nombreCancha} está ocupada` : `La cancha llamada ${nombreCancha} está disponible`;
console.log(mensaje);

const email = "arleth64@gmail.com";
const contraseña = "1234";

email == "arleth64@gmail.com" && contraseña == "1234" ?
    console.log(`El señor usuario con correo ${email} Bienvenido al sistema`) :
    console.log(`El correo ${email} y la contraseña digitada es incorrecta`);

const colorSemaforo = "amarillo";
colorSemaforo == "rojo"? console.log('El semáforo esta en ${colorSemaforo} puede seguir') :
    colorSemaforo == "verde"? console.log('El semáforo esta en ${colorSemaforo} debe parar') :
    colorSemaforo == "amarillo" ? console.log('¡Atención, moteros!'):
    console.log('muestra color ${colorSemaforo}, esta dañado');