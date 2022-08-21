// flat map devuelve una matriz con una función aplicada a cada elemento para luego aplanarla
// en otras palabras devuelve una matriz con los valores de una matriz anidada (una amtriz de cualquier submatriz)

const array = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12, 13, 14, 15, 16]]];

//flat
console.log(array.flat(3)); // 3 es la profundidad de la matriz
//flatmap
const array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap(v => [v, v * 2, v * 3, v * 4])); 
