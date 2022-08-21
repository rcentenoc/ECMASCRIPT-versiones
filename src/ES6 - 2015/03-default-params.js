// default params es una forma de asignar valores por defecto a los parámetros de una función

// antes
function newUser (name,age,country){
    var name = name || 'Fabricio';
    var age = age || 31;
    var country = country || 'Perú';
    console.log(name,age,country);
}

newUser();
newUser('Mariana',23,'Colombia');

// ahora
function newUser2 (name='Fabricio',age=31,country='Perú'){
    console.log(name,age,country);
}
newUser2();
newUser2('Mariana',23,'Colombia');