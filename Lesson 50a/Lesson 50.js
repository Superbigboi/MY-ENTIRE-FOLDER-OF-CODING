class Car{
    constructor(name,color,year){
        this.name = name;
        this.color = color;
        this.year = year;
    }
    start(){
        return "The car has started";
    }
    stop(){
        return "the car has stopped";
    }
    brake(){
        return "the brake has been applied";
    }
}
const myCar1 = new Car("Honda Camery","Red", 2019);
console.log("My Honda Camery spent "+myCar1.age()+" years with me")
const myCar2 = new Car("Honda Civic","Blue", 2020);
console.log("My Honda Civic spent "+myCar2.age()+" years with me")
const myCar3 = new Car("Lexus GT","White", 2017);
const myCar4 = new Car("Ford Mustang","Blue", 2011);
const myCar6 = new Car("Ford F1 50","Red", 2016);
const myCar5 = new Car("Nissan Rouge","Red", 2020);

console.log(myCar1);
console.log(myCar2);

class Person{
    constructor (name,gender,age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}
const person1 = new Person("Michael", "Male" , 13,);
const person2 = new Person("Sophia", "female" , 12,);
console.log(person1)
console.log(person2)

function brake(){
    console.log(myCar1.brake())
}
function stop(){
    console.log(myCar1.stop())
}
function start(){
    console.log(myCar1.start())
}

