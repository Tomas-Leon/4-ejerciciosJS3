let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write('<h3>Lista de meses</h3>');

let listaMeses = "<ul>";
for (let i = 0; i < meses.length; i++) {
  listaMeses += "<li>" + meses[i] + "</li>";
}
listaMeses += "</ul>";

document.write(listaMeses);

