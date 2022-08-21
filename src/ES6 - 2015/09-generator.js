
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

let array = [1, 2, 3, 4, 5];
const it = iterate(array);
console.log(it.next().value);// 1
console.log(it.next().value);// 2
console.log(it.next().value);// 3
console.log(it.next().value);// 4
console.log(it.next().value);// 5
console.log(it.next().value);// undefined

const it1 = iterate([1, 2, 3, 4, 5]);
console.log(it1.next().value);// 1
