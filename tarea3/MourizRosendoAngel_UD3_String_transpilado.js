var nombre = prompt("Nombre y apellidos:");
var longitudTotal = nombre.length;
var tamanoSinEspacios = nombre.replace(/\s/g, "").length;
var minusculas = nombre.toLowerCase();
var mayusculas = nombre.toUpperCase();
var partes = nombre.split(" ");
var nombre2 = partes[0];
var apellido1 = partes[1];
var apellido2 = partes[2];
var nombreUsuario = "".concat(nombre2.toLowerCase()).concat(apellido1.charAt(0).toUpperCase()).concat(apellido2.charAt(0).toUpperCase());
console.log("Tamaño total:", longitudTotal);
console.log("Tamaño sin espacios:", tamanoSinEspacios);
console.log("Minúsculas:", minusculas);
console.log("Mayúsculas:", mayusculas);
console.log("Nombre:", nombre2);
console.log("Apellido1:", apellido1);
console.log("Apellido2:", apellido2);
console.log("UsuarioPropuesto:", nombreUsuario);
var contrasena = prompt("Introduce una contraseña:");
var contrasenaOK = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(contrasena);
console.log("La contraseña cumple las premisas:", contrasenaOK);
