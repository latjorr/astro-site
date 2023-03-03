class Person{
    constructor(first, last, age){
        this.first = first;
        this.last = last;
        this.age = age;
    }
    get speak(){
        console.log(`My full name  is ${this.first} ${this.last} and I am ${this.age} years old`);
    }
    set speak(value){
        this.age = value;


    }
}


const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Sara', 'Connor', 32);



console.log(person1.last, person1.age);
person1.speak;

