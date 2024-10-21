// Crear un arreglo para registrar las apariciones de cada suma (posibles sumas entre 2 y 12)
const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // creo el arreglo con los 11 espacios para almacenar las apariciones

// Función para lanzar un dado y obtener un número aleatorio entre 1 y 6
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Repetir el lanzamiento de dos dados 50 veces
for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;

  // Incrementar el contador en la posición correspondiente a la suma
  apariciones[suma - 2]++; // se le resta 2 ya que la suma minima es 2 y va en la pocicion 0 del arreglo apariciones, el 3 en la 1 y asi sucesivamente hasta la posicion 10
}

// Mostrar el resultado en una tabla
document.write(
  "<h3>Resultado de sumar la tirada de dos dados (en 50 lanzamientos):</h3>"
);
document.write("<table border='1'>");
document.write("<tr><th>Suma</th><th>Apariciones</th></tr>");

for (let i = 0; i < apariciones.length; i++) {
  document.write(`<tr><td>${i + 2}</td><td>${apariciones[i]}</td></tr>`)
  //se hace el i+2 porque el i arranca de 0 y el primer numero que hay que poner es 2
}

document.write("</table>");
