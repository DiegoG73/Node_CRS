// Forma antigua de hacer funciones:
function sumar(a, b) {
    return a + b;
};

console.log(sumar(5, 10))

//Las funciones flecha nos permiten reducir las funciones comunes a una simple linea
const sumar1 = (a, b) => a + b;
console.log(sumar1(5, 10));


// Arrow function sin argumentos
const saludar = () => 'Hola mundo';
console.log(saludar())