// matchAll sirve para buscar todas las coincidencias de una expresión regular
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple Pie, Apple iPhone, Apple MacBook, Apple MacBook Pro';
for (let match of fruit.matchAll(regex)) {
    console.log(match);
}