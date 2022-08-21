// allSettled sirve para ver los status de todas las promesas programadas
const promise1 = new Promise((resolve, reject) => reject("RECHAZADO"));
const promise2 = new Promise((resolve, reject) => resolve("RESUELTO"));
const promise3 = new Promise((resolve, reject) => resolve("RESUELTO POR SEGUNDA VEZ"));

Promise.allSettled([promise1, promise2, promise3])
    .then((response => console.log(response)));