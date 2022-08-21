// let se usa para declarar variables que pueden cambiar de valor y solo existen dentro de un scope
// const se usa para declarar variables que no pueden cambiar de valor
// var se usa para declarar variables que pueden cambiar de valor y existen dentro de un scope o fuera de un scope

var lastName = 'Fabricio';
lastName = 'Centeno';
console.log(lastName);

let name = 'Centeno';
name = 'Fabricio';
console.log(name);

const type = 'human';
type = 'dog';
console.log(type);

const fruits = () => {
    if (true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'kiwi'; // block scope
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    console.log(fruit3);
}
fruits();