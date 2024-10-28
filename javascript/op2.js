function contarVocales(palabra) {
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase(); // Convertir a minúscula para simplificar la verificación
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++;
        }
    }

    return contador;
}


const palabra = prompt("Ingrese una palabra:").trim();


document.write("La palabra tiene " + contarVocales(palabra) + " vocales.");


//.trim() Elimina los espacion para facilitar el conteo