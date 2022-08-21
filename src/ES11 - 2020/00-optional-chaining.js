// optional chaninig es una opción para validar las consultas de información
// en caso que no exista el campo que busco, en vez de mostrarme el error
// me mostrará undefined
const users = {
    fabricio:{
        country:'PE'
    },
    ana:{
        country:'CO',
        age:30
    },
    andrea:{
        country:'AR',
        age:28
    }
}

console.log(users.fabricio.age); // undefined
console.log(users?.mario?.ocupation); // undefined
console.log(users.mario.ocupation); // TypeError: Cannot read properties of undefined (reading 'ocupation')
