async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
}

const other = anotherGenerator();
other.next().then(response => console.log(response)); // {value: 1, done: false}
other.next().then(response => console.log(response.value)); // 2
other.next().then(response => console.log(response.value)); // 3
other.next().then(response => console.log(response.value)); // 4
other.next().then(response => console.log(response.value)); // undefined

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['efren', 'jose', 'maria', 'luis']);
console.log(names); // Promise { <pending> }  no se muestra nada porque es una promesa y no se puede mostrar en la consola
console.log('After');