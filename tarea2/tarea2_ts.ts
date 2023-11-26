
let a:number=1;
do {
    console.log("9 x "+a+" = "+ 9*a);
    a++
}
while (a<=10);



    let b:number=0;
    let c:number=1;
    let d:number=0;
    for (let a=0; a<=10; a++) {
        console.log(b);
        d=b+c; 
        b=c;
        c=d;
    }



let numero:number = parseInt(prompt("Comprobar si un numero entero es primo:"));
if (numero<=0){
    console.log("Error, el numero debe de ser un entero mayor que cero");
}
else {
let e:number=2;
while (e<=numero) {

    if (numero%e == 0 && numero != e) {
        console.log("El numero no es primo!");
        break;
    }
    if (numero==e) {
        console.log("El numero es primo");
    }
    e++;
}
}

let f:number = parseInt(prompt("Introduce la edad (en numeros enteros)"));
if (f>=0 && f<=12) {
    console.log("Neno");
}
else if (f>=13 && f<=18) {
    console.log("Adolescente"); 
}
else if (f>=19 && f<=30) {
    console.log("Xoven"); 
}
else if (f>=31 && f<=64) {
    console.log("Adulto"); 
}
else if (f>=65 && f<=100) {
    console.log("Xubilado"); 
}
else {
    console.log("Error na idade!!")
}
switch (true) {
    case f>=0 && f<=12:
        console.log("Neno"); 
        break;
    case f>=13 && f<=18:
        console.log("Adolescente"); 
        break;
    case f>=19 && f<=30:
        console.log("Xoven"); 
        break;
    case f>=31 && f<=64:
        console.log("Adulto"); 
        break;  
    case f>=65 && f<=100:
        console.log("Xubilado"); 
        break;  
    default:
     console.log("Error na idade!!")
     break;
} 
    let operando:number =125;
    let resultado:number =0;
    resultado = operando >> 3;
    console.log(resultado);
    operando=40;
    resultado = operando << 2;
    console.log(resultado);
    operando=25;
    resultado = operando >> 1;
    console.log(resultado);
    operando=10;
    resultado = operando << 4;
    console.log(resultado);
