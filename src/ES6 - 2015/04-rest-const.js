// arrays destructuring
let fruits = ['apple', 'banana', 'orange'];
let [a,b] = fruits;
console.log(a,fruits[0]);

// objects destructuring
let user = {username:'Fabricio', age:31, country:'Perú'};
let {username, age} = user;
console.log(username);
console.log(age);
console.log(user.country);

// spread operator
let person = {name:'Rolando', age:40};
let country = 'España';

let data = { ...person, country };
let data2 = { id:1, ...person, country };

console.log(data);
console.log(data2);
console.log(person);

// rest operator
function sum(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    console.log(num+values);
    return num+values[0];
}

sum(1,2,3,4,5,6);