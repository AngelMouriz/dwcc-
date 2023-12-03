let paises: string[] = ["Afganistán", "Albania", "Alemania", /* ... */ "Zimbabue"];

console.log(paises);

function cantidadArray(): void {
    console.log(paises.length);
}

function imprimeArray(): void {
    console.log(paises);
}

function arrayInverso(): void {
    console.log(paises.reverse()); // enseñamos array al revés.
    paises.reverse(); // lo dejamos como estaba. Se podría hacer con un bucle, pero esto es más sencillo (Habría que ver si es computacionalmente lógico)
}

function anadePaisPrincipio(): void {
    let paisNuevo: string = prompt("País a añadir:") || ""; // handle potential null or undefined
    paises.unshift(paisNuevo);
    console.log("AÑADIDO NUEVO PAIS:" + paises);
}

function anadePaisFinal(): void {
    let paisNuevo: string = prompt("País a añadir:") || ""; // handle potential null or undefined
    paises.push(paisNuevo);
    console.log("AÑADIDO ULTIMO PAIS BORRADO:" + paises);
}

function borraPrimerPais(): void {
    console.log("PRIMER PAIS BORRADO:" + paises.shift());
}

function borraUltimoPais(): void {
    console.log("ULTIMO PAIS BORRADO:" + paises.pop());
}

function paisPosicion(): void {
    let posicion: string = prompt("Posición del país:") || ""; // handle potential null or undefined
    console.log("POSICION PAIS:" + paises[posicion]);
}

function introducePais(): void {
    let pais: string = prompt("País a buscar:") || ""; // handle potential null or undefined
    console.log("PAIS EN POSICION (-1 SI NO EXISTE):" + paises.indexOf(pais));
}

function paisEntrePosiciones(): void {
    let posicion1: number = parseInt(prompt("Posición del país 1:") || "0");
    let posicion2: number = parseInt(prompt("Posición del país 2:") || "0");
    console.log(paises.slice(posicion1, posicion2));
}

cantidadArray();
imprimeArray();
arrayInverso();
anadePaisPrincipio();
anadePaisFinal();
borraPrimerPais();
borraUltimoPais();
paisPosicion();
introducePais();
paisEntrePosiciones();
