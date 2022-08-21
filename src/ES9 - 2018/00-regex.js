// regex sirve para capturar grupos de valores que se encuentran en caracteres (expresiones regulares)
const regex = /(\d{4})-(\d{2})-(\d{2})/; // se puede usar otro nombre para la variable
const match = regex.exec('2018-04-20');
console.table(match); // muestra una tabla con los valores de la expresión regular
console.log(match); // muestra una tabla con los valores
const year = match[1];
console.log(year); // muestra el año

