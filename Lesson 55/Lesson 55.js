class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

}
const Person1 = new Person ("Paul", 24, "Abuja");
console.log(Person1)
const Person2 = {
    "name":'Peter',
    'age':"28",
    "address":"lagos"
}
console.log(Person2)
console.log(Person2.address)


const Person3 = {"name":"Michael", "age":"13","address":"ur house"}
console.log(Person3)

const Person4 = {name:"", age:90,address:""}
console.log(Person4)

// empty object
const empty = {}
console.log(empty)

// inputing things inside an empty object
const notEmpty = {}
notEmpty.name = "Michael"
notEmpty.age = 21
notEmpty.address = "house"
delete notEmpty.age
console.log(notEmpty)

const boss = {
    fname:"Jacob",
    lname:"Garcia",
    age:50,
    cars:{
        car1:"Camery",
        car2:"Honda",
        car3:"Lexus",
    },
    mcars:["Honda","Nissan", "Toyota" ],
    favorites:[
        favorite1="One Piece",
        favorite2="Basketball",
        favortite3="Fortnite"],
    FullName: function(){
        return this.fname+""+this.lname
    }
}
console.log(boss)
console.log(boss.cars.car3)
console.log(cars[0])