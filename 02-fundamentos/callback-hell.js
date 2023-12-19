// El callback hell hace referencia a tener un callback dentro de otro callback, dentro de otro callback, dentro de otro callback y así hasta la eternidad
const empleados = [
    {
        id: 1,
        nombre: 'Diego'
    },
    {
        id: 2,
        nombre: 'Fernando'
    },
    {
        id: 3,
        nombre: 'Sofia'
    }
];

const salarios = [
    {
        id: 1,
        salario: 6000
    },
    {
        id: 2,
        salario: 1000
    }
]


// Manera correcta de tratar los callbacks

const id = 10;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id: ${id} no encontrado`)
    };


    // Aquí hay callback hell
    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err)
        };

        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    });
};

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    };
    console.log('Empleado existe!');
    console.log(empleado.nombre);
});

getSalario(id, (err, salario) => {
    if (err) {
        console.log('ERROR!')
        return console.log(err)
    };

    console.log('Salario encontrado');
    console.log(salario)
});
// Manerra erronea de usar los callbacks (Callback  Hell)