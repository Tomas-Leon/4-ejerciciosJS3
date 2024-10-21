const numero = parseInt(
    prompt("Introduce el número para ver su tabla de multiplicar:")
  );

function mostrarTablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`${numero} x ${i} = ${resultado}<br>`);
  }
}

mostrarTablaMultiplicar(numero);
