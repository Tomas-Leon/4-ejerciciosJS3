function filtrarPares(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // Verificar si el número es par
            resultado.push(array[i]);
        }
    }

    return resultado;
}

// Inicializar el array
let numeros = [];

// Solicitar números al usuario
while (true) {
    let entrada = prompt("Ingrese un número entero positivo (o presione 'Cancelar' para terminar):");

    // Verificar si el usuario presiona "Cancelar"
    if (entrada === null) {
        break; // Terminar el bucle si se presiona "Cancelar"
    }

    // Convertir la entrada a número
    let numero = parseInt(entrada);

    // Verificar si la entrada es un número positivo
    if (!isNaN(numero) && numero >= 0) {
        numeros.push(numero); // Agregar el número al array
    } else if (numero < 0) {
        alert("Número negativo ignorado. Intente de nuevo.");
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

// Filtrar los números pares
let pares = filtrarPares(numeros);

if (pares.length > 0) {
    document.write("Los números pares son: " + pares.join(", "));
} else {
    document.write("No se encontraron números pares.");
}
