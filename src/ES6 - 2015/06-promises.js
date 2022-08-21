// promesas en ES6

const anotherFunction = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('Funciono!!');
        } else {
            reject('No funciono :(');
        }
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));