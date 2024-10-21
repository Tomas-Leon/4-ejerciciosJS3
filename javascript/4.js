const numero = parseInt(prompt("Introduce un número entero:"));

function parOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número " + numero + " es par.";
    } else {
      return "El número " + numero + " es impar.";
    }
  }
  
  document.write(parOImpar(numero));
  