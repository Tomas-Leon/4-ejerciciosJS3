function segundoNumeroMasGrande(array) {
    // Verificar si el array tiene menos de dos elementos
    if (array.length < 2) {
        return "No hay suficientes números.";
    }

    // Inicializar mayor y segundo mayor con los dos primeros elementos
    let mayor;
    let segundoMayor;

    if (array[0] > array[1]) {
        mayor = array[0];
        segundoMayor = array[1];
    } else {
        mayor = array[1];
        segundoMayor = array[0];
    }

    // Recorrer el array desde el tercer elemento
    for (let i = 2; i < array.length; i++) {
        // Verificar si el número actual es mayor que el mayor encontrado
        if (array[i] > mayor) {
            segundoMayor = mayor; // El antiguo mayor se convierte en segundo mayor
            mayor = array[i]; // Actualizar el mayor
        } else if (array[i] > segundoMayor && array[i] !== mayor) {
            segundoMayor = array[i]; // Actualizar el segundo mayor
        }
    }

    // Verificar si se encontró un segundo mayor
    if (mayor === segundoMayor) {
        return "No hay suficientes números únicos.";
    }

    return segundoMayor;
}

// Inicializar el array
const numeros = [];

// Solicitar números al usuario
while (true) {
    let entrada = prompt("Ingrese un número entero positivo (o presione 'Cancelar' para terminar):");

    // Verificar si el usuario presiona "Cancelar"
    if (entrada === null) {
        break; // Terminar el bucle si se presiona "Cancelar"
    }

    // Convertir la entrada a número
    let numero = parseInt(entrada);

    // Verificar si la entrada es un número válido
    if (!isNaN(numero)) {
        numeros.push(numero); // Agregar el número al array
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

// Calcular el segundo número más grande
let segundoMayor = segundoNumeroMasGrande(numeros);

// Mostrar el resultado en la página web
document.write("El segundo número más grande es: " + segundoMayor);
