const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;
const template = `${nombre} ${real}`;

console.log(normal);
console.log(template);

//Los template strings nos permiten también hacer strings más largos
const html = `
    <h1>Hola</h1>
    <p>Mundo</p>
`;

console.log(html);