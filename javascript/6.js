const ladoA = parseFloat(prompt("Introduce el valor del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Introduce el valor del lado B del rectángulo:"));

function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

let perimetro = calcularPerimetro(ladoA, ladoB);

document.write("El perímetro del rectángulo es: " + perimetro);
