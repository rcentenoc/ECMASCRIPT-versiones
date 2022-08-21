// enahced object literals

function newUser (id,user,age,country){
    return{
        id,
        user,
        age,
        country
    }
}

console.log(newUser(1,'Fabricio',31,'Perú'));

// Respuesta: { id: 'Fabricio', user: 31, age: 'Perú', country: 1 }

