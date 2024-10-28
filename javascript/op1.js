function sumaDigitos(numero) {
  // Verificar si el número es positivo
  if (numero < 0) {
    return "Error: El número debe ser positivo.";
  }

  // Sumar los dígitos de manera iterativa hasta obtener un solo dígito
  while (numero >= 10) {
    numero = numero
      .toString()
      .split("")
      .reduce((suma, digito) => suma + parseInt(digito), 0);
  }

  return numero;
}

let numero = parseInt(prompt("Ingrese un número positivo:"));

document.write(sumaDigitos(numero));


//numero.toString() convierte el número en una cadena, por ejemplo, si numero es 1234, se convierte en "1234"

//.split('') divide la cadena en un array de caracteres: ["1", "2", "3", "4"].

//.reduce((suma, digito) => suma + parseInt(digito), 0) 
//recorre cada elemento del array y los convierte a enteros con parseInt(digito), sumándolos en la variable suma. El 0 al final de reduce indica el valor inicial de la suma.
