// #---------------------------------
// EJEMPLO
// declarando la clases
class User {

};
// instanciando una clase
const newUser = new User();
// #---------------------------------
class usuario {
    greetings (){
        return 'hello puto!!';
    }
};

const fab = new usuario();
console.log(fab.greetings());
// #---------------------------------
// COnstructor

class Usuario2 {
    constructor(){
        console.log('Nuevo usuario');
    }
    greetings(){
        console.log('Hello');
    }
}

const fab2 = new Usuario2();

// #---------------------------------
// This

class Usuario3 {
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} my name is ${this.name}.`;
    }
}

const fab3 = new Usuario3('Fabricio');
console.log(fab3.greetings());

// #---------------------------------
// Setter y getters

class Usuario4 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} my name is ${this.name}.`;
    }

    get Age(){
        return `I have ${this.age} years old.`; 
    }

    set Age(age){
        this.age = age;
    }
}

const fab4 = new Usuario4('Fabricio', 30);
console.log(fab4.Age); // I have 30 years old.
fab4.age = 31; // usando el cosntructor
console.log(`Sorry ,${fab4.Age}`); // Sorry ,I have 31 years old.
fab4.Age = 32; // usando el setter 
console.log(`Sorry ,${fab4.Age}`); // Sorry ,I have 32 years old.