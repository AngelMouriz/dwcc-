function diasCurso(): void {
    let hoy: Date = new Date();
    let finalCurso: Date = new Date(hoy.getFullYear(), 5, 25);
    console.log("Días hasta final de curso: " + (finalCurso.getTime() - hoy.getTime()) / 1000 / 60 / 60 / 24);
}

function aniversarioEnFinDeSemana(): void {
    const aniversario: Date = new Date(prompt("Introduce cumpleaños: (formato: MM/DD):"));
    for (let ano: number = new Date().getFullYear(); ano <= 2100; ano++) {
        aniversario.setFullYear(ano);
        const diaSemana: number = aniversario.getDay();

        if (diaSemana === 0 || diaSemana === 6) {
            console.log(`El cumpleaños cae en fin de semana en el año ${ano}.`);
        }
    }
}

function mostrarFecha(formato: number): void {
    const mostrarFecha: Date = new Date();

    switch (formato) {
        case 1:
            console.log(`${mostrarFecha.getMonth() + 1}/${mostrarFecha.getDate()}/${mostrarFecha.getFullYear()}`);
            break;
        case 2:
            console.log(`${Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(mostrarFecha)}, ${mostrarFecha.getDate()} de ${Intl.DateTimeFormat('es-ES', { month: 'long' }).format(mostrarFecha)} de ${mostrarFecha.getFullYear()}`);
            break;
        case 3:
            console.log(`${Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(mostrarFecha)}, ${Intl.DateTimeFormat('en-US', { month: 'long' }).format(mostrarFecha)} ${mostrarFecha.getDate()}, ${mostrarFecha.getFullYear()}`);
            break;
        default:
            console.log("Formato no válido.");
    }
}

function mostrarHora(formato: number): void {
    const mostrarHora: Date = new Date();

    switch (formato) {
        case 1:
            console.log(`${mostrarHora.getHours()}:${mostrarHora.getMinutes()}:${mostrarHora.getSeconds()}`);
            break;
        case 2:
            console.log(`${mostrarHora.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`);
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
