let nombre: string = prompt("Nombre y apellidos:");
let longitudTotal: number = nombre.length;
let tamanoSinEspacios: number = nombre.replace(/\s/g, "").length;
let minusculas: string = nombre.toLowerCase();
let mayusculas: string = nombre.toUpperCase();
let partes: string[] = nombre.split(" ");
let nombre2: string = partes[0];
let apellido1: string = partes[1];
let apellido2: string = partes[2];
let nombreUsuario: string = `${nombre2.toLowerCase()}${apellido1.charAt(0).toUpperCase()}${apellido2.charAt(0).toUpperCase()}`;

console.log("Tamaño total:", longitudTotal);
console.log("Tamaño sin espacios:", tamanoSinEspacios);
console.log("Minúsculas:", minusculas);
console.log("Mayúsculas:", mayusculas);
console.log("Nombre:", nombre2);
console.log("Apellido1:", apellido1);
console.log("Apellido2:", apellido2);
console.log("UsuarioPropuesto:", nombreUsuario);

let contrasena: string = prompt("Introduce una contraseña:");
let contrasenaOK: boolean = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(contrasena);

console.log("La contraseña cumple las premisas:", contrasenaOK);
