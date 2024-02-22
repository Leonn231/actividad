let numero = 5;

if (numero > 0) {
  console.log('El número es positivo.');

  if (numero % 2 === 0) {
    console.log('El número es par.');
  } else {
    console.log('El número es impar.');
  }

  if (numero > 5) {
    console.log('El número es mayor que 5.');
  } else if (numero === 5) {
    console.log('El número es 5.');
  } else {
    console.log('El número es menor que 5.');
  }

} else if (numero < 0) {
  console.log('El número es negativo.');
} else {
  console.log('El número es cero.');
}