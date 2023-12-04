//function Person(name, lastName){
//    this.name=name;
//    this.lastName=lastName;
//    this.sayHi=function(){
//        console.log('Hi I am ${this.name} ${this.lastName');
//    };
//}
//
//const person = new Person("John", "Doe");

//class Person{
//    age = 35;
//    constructor(name, lastName){ // class can onlyy have on constructor
//        this.name = name;
//        this.lastName = lastName
//    }
//    sayyHi(){
//        console.log(`Hi, I am ${this.name} ${this.lastName}`)
//    }
//}
//const person=new Person("John","Doe");
//person.sayyHi();
//console.log(`${person.age}`);

//class Person{ // regular creating a object
//    constructor(name,lastName){
//        this.name = name;
//        this.lastName = lastName
//    }
//    sayHi(){
//        console.log(`Hi I am I am ${this.name} ${this.lastName}`)
//    }
//}
//class Comedian extends Person{ //class that inherits from class person
//    constructor(name,lastName){
//        super(name,lastName);
//    }
//    makeAJoke(){
//        console.log("funny joke here")
//    }
//}
//class Athlete extends Person{ // class that also inherits from class person
//    constructor(name,lastName,sport){
//        super(name,lastName);
//        this.sport=sport;
//    }
//    nameYourSport(){
 //       console.log(`I practice ${this.sport}`)
//    }
//}
//class SoccerPlayyer extends Athlete{ // class inherits from Athlete that inherits from Person
//    constructor(name,lastName){
//        super(name,lastName,"Soccer");
//    }
//    kickTheBall(){
//        console.log("Goaaaaaal!")
//    }
//}
//const person=new Person("John","Doe");
//const comedian=new Comedian("Kevin","Heart");
//const athlete=new Athlete("Lebron","James","Basketball")
//const soccerPlayer = new SoccerPlayyer("Lionel","messi")
//person.sayHi(); comedian.sayHi(); athlete.sayHi(); soccerPlayer.kickTheBall(); // all of these classes can say hi but they cannot take other functionns from other classes

class Pet {
    constructor(name){
        name = this.name;
    }
    makeSound(){
        throw new Error("Sound has not been defined!")
    }
}
class Dog extends Pet {
    makeSound(){
        console.log("WOOF!")
    }
}
class Cat extends Pet {
    makeSound(){
        console.log("Meow!")
    }
}