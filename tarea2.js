var a = 1;
do {
    console.log("9 x " + a + " = " + 9 * a);
    a++;
} while (a <= 10);
var b = 0;
var c = 1;
var d = 0;
for (var a_1 = 0; a_1 <= 10; a_1++) {
    console.log(b);
    d = b + c;
    b = c;
    c = d;
}
var numero = parseInt(prompt("Comprobar si un numero entero es primo:"));
if (numero <= 0) {
    console.log("Error, el numero debe de ser un entero mayor que cero");
}
else {
    var e = 2;
    while (e <= numero) {
        if (numero % e == 0 && numero != e) {
            console.log("El numero no es primo!");
            break;
        }
        if (numero == e) {
            console.log("El numero es primo");
        }
        e++;
    }
}
var f = parseInt(prompt("Introduce la edad (en numeros enteros)"));
if (f >= 0 && f <= 12) {
    console.log("Neno");
}
else if (f >= 13 && f <= 18) {
    console.log("Adolescente");
}
else if (f >= 19 && f <= 30) {
    console.log("Xoven");
}
else if (f >= 31 && f <= 64) {
    console.log("Adulto");
}
else if (f >= 65 && f <= 100) {
    console.log("Xubilado");
}
else {
    console.log("Error na idade!!");
}

var operando = 125;
var resultado = 0;
resultado = operando >> 3;
console.log(resultado);
operando = 40;
resultado = operando << 2;
console.log(resultado);
operando = 25;
resultado = operando >> 1;
console.log(resultado);
operando = 10;
resultado = operando << 4;
console.log(resultado);
