// promise.any() sirve para ejecutar varias promesas y que se cumpla una de ellas
// si todas fallan, entonces se ejecuta el catch

const promise1 = new Promise((resolve, reject) => reject("RECHAZADO"));
const promise2 = new Promise((resolve, reject) => resolve("RESUELTO EN LA SEGUNDA PROMESA"));
const promise3 = new Promise((resolve, reject) => resolve("RESUELTO POR SEGUNDA VEZ"));

Promise.any([promise1, promise2, promise3])
    .then((response => console.log(response)));