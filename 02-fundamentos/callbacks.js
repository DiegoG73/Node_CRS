// Un callback es una función que se ejecutará después en el tiempo
// setTimeout(() => {
//     console.log('Hola mundo')
// }, 1000);

const getUserById = (id, callback) => {
    const user = {
        // Evitamos redundancia
        id,
        name: 'Diego'
    };

    setTimeout(() => {
        callback(user)
    }, 1500);

    // Lo anterior se hace en:
};

// AQUÍ!!!!!
getUserById(10, (user) => {
    console.log(user);
    console.log(user.name.toUpperCase())
});