try{
    hello();
} catch(error){
    console.log(error);
}

try{
    anotherFn();
} catch {
    console.log('No existe la función establecida');
}
