
class Usuario4 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #speak(){ // # private method
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} my name is ${this.name}.`;
    }

    get #Age(){
        return `I have ${this.age} years old.`; 
    }

    set #Age(age){
        this.age = age;
    }
}

const fab4 = new Usuario4('Fabricio', 30);
console.log(fab4.Age); // I have 30 years old.
fab4.age = 31; // usando el cosntructor
console.log(`Sorry ,${fab4.Age}`); // Sorry ,I have 31 years old.
fab4.Age = 32; // usando el setter 
console.log(`Sorry ,${fab4.Age}`); // Sorry ,I have 32 years old.