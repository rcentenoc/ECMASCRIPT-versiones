// arrow functions son funciones anonimas que se pueden guardar en variables o constantes y se pueden usar como callbacks en otras funciones
// las arrow functions no tienen su propio scope, por lo que no pueden ser usadas como constructores
// las arrow functions no tienen el objeto arguments
// las arrow functions no tienen el objeto this
// las arrow functions no tienen el objeto super
// las arrow functions no tienen el objeto new.target
// las arrow functions no tienen el objeto prototype
// las arrow functions no tienen el objeto yield
// las arrow functions no tienen el objeto super
// las arrow functions no tienen el objeto new.target

function square(num){
    return num * num;
}

const squareArrow = (num) => {
    return num * num;
}

const squareArrow2 = (num) => num * num;