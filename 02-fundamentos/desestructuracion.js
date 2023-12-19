const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};

//Desestructuración: Nos permite obtener datos específicos de un string


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(nombre, apellido, poder);

// Desestructuración:
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Diego';
    console.log(nombre, apellido, poder, edad);
};
// imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]


//Desestructuración de arrays:
const [, , h3] = heroes;
console.log(h3);