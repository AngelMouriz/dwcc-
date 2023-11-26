function diasCurso() {
    var hoy = new Date();
    var finalCurso = new Date(hoy.getFullYear(), 5, 25);
    console.log("Días hasta final de curso: " + (finalCurso.getTime() - hoy.getTime()) / 1000 / 60 / 60 / 24);
}
function aniversarioEnFinDeSemana() {
    var aniversario = new Date(prompt("Introduce cumpleaños: (formato: MM/DD):"));
    for (var ano = new Date().getFullYear(); ano <= 2100; ano++) {
        aniversario.setFullYear(ano);
        var diaSemana = aniversario.getDay();
        if (diaSemana === 0 || diaSemana === 6) {
            console.log("El cumplea\u00F1os cae en fin de semana en el a\u00F1o ".concat(ano, "."));
        }
    }
}
function mostrarFecha(formato) {
    var mostrarFecha = new Date();
    switch (formato) {
        case 1:
            console.log("".concat(mostrarFecha.getMonth() + 1, "/").concat(mostrarFecha.getDate(), "/").concat(mostrarFecha.getFullYear()));
            break;
        case 2:
            console.log("".concat(Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(mostrarFecha), ", ").concat(mostrarFecha.getDate(), " de ").concat(Intl.DateTimeFormat('es-ES', { month: 'long' }).format(mostrarFecha), " de ").concat(mostrarFecha.getFullYear()));
            break;
        case 3:
            console.log("".concat(Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(mostrarFecha), ", ").concat(Intl.DateTimeFormat('en-US', { month: 'long' }).format(mostrarFecha), " ").concat(mostrarFecha.getDate(), ", ").concat(mostrarFecha.getFullYear()));
            break;
        default:
            console.log("Formato no válido.");
    }
}
function mostrarHora(formato) {
    var mostrarHora = new Date();
    switch (formato) {
        case 1:
            console.log("".concat(mostrarHora.getHours(), ":").concat(mostrarHora.getMinutes(), ":").concat(mostrarHora.getSeconds()));
            break;
        case 2:
            console.log("".concat(mostrarHora.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })));
            break;
        default:
            console.log("Formato no válido.");
    }
}
diasCurso();
aniversarioEnFinDeSemana();
mostrarFecha(1);
mostrarFecha(2);
mostrarFecha(3);
mostrarHora(1);
mostrarHora(2);
