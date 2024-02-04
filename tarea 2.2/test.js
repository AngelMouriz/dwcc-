class Disco {
  constructor(nome, grupo, anoPublicacion, tipoMusica, prestamo) {
    this.nome = nome;
    this.grupo = grupo;
    this.anoPublicacion = anoPublicacion;
    this.tipoMusica = tipoMusica;
    this.prestamo = prestamo;
  }

  //CARGA DATOS
  cargarDatos(nome, grupo, anoPublicacion, tipoMusica, prestamo) {
    this.nome = nome;
    this.grupo = grupo;
    this.anoPublicacion = anoPublicacion;
    this.tipoMusica = tipoMusica;
    this.prestamo = prestamo;
  }

//INFO POR CONSOLA
  mostrarInformacion() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Grupo ou Cantante: ${this.grupo}`);
    console.log(`Ano de Publicación: ${this.anoPublicacion}`);
    console.log(`Tipo de Música: ${this.tipoMusica}`);
    console.log(`Prestamo: ${this.prestamo ? 'Si' : 'Non'}`);
  }
}

//COLECCION DISCOS
class ColeccionDiscos {
  constructor() {
    this.discos = [];
  }

  //Añadir disco
  anadirDisco(disco) {
    this.discos.push(disco);
  }

  //MOSTRAR DISCOS
  mostrarDiscos() {
    this.discos.forEach((disco, index) => {
      console.log(`Disco ${index + 1}:`);
      disco.mostrarInformacion();
    });
  }
}
//EJEMPLO DE USO
const coleccion = new ColeccionDiscos();
coleccion.anadirDisco(new Disco('Dark Side of the Moon', 'Pink Floyd', 1973, 'Rock', false));
coleccion.anadirDisco(new Disco('Thriller', 'Michael Jackson', 1982, 'Pop', true));

console.log('Mostrando todos os discos da colección:');
coleccion.mostrarDiscos();
