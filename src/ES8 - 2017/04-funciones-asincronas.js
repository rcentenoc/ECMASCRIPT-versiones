// ? es un if ternario
// : es un else ternario
const fnAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Despues de 3 segundos...'), 3000)
        : reject(new Error('Test Error'));
    })
}

const anotherFn = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('push!!');
}

console.log('Before');
anotherFn();
console.log('After');
//async y await sirve para que vaya terminando una función mientras se desarrolla el programa completo
