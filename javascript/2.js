let ciudades = [];

while (true) {
  let ciudad = prompt(
    "Introduce el nombre de una ciudad (o presiona cancelar para terminar):"
  );
  if (ciudad === null) {
    break;
  }

  let pais = prompt(
    "Introduce el nombre del país para la ciudad " + ciudad + ":"
  );
  if (pais === null) {
    break;
  }

  ciudades.push(ciudad + ", " + pais);
}

// 1- Mostrar la longitud del arreglo
document.write("Cantidad de ciudades:", ciudades.length);

// 2- Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<h3>Ciudades seleccionadas:</h3>");
if (ciudades.length >= 1)
  document.write("<p>1- Primera ciudad: " + ciudades[0] + "</p>");
if (ciudades.length >= 3)
  document.write("<p>2- Tercera ciudad: " + ciudades[2] + "</p>");
if (ciudades.length >= 1)
  document.write("<p>3- Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");

// 3- Añadir "París, Francia" en la última posición del arreglo
ciudades.push("París, Francia");

if (ciudades.length >= 1)
    document.write("<p>4- Última ciudad despues de agregar: " + ciudades[ciudades.length - 1] + "</p>");

// Insertar "Barcelona" en la posición 2 sin eliminar el elemento actual
if (ciudades.length >= 2) {
  ciudades.splice(1, 0, "Barcelona");
}

// Mostrar todo el arreglo en forma de lista
document.write("<h3>Lista de todas las ciudades y países:</h3>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write("<li>" + ciudades[i] + "</li>");
}
document.write("</ul>");
