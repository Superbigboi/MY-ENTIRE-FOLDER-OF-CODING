(function (){
    console.log("hello world");
})();

function Multiply(a,b=10){
    return a*b
}
let x  = Multiply(6,5)*2
console.log(x);
document.getElementById("demo").innerText= "your score is " + x;

// Creating a 
const person = {
    firstName:"Michael",
    lastName:"Kranda",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName())

class SeniorStudent{
    constructor(name, testscore, examscore) { 
        this.name = name;
        this.testscore = testscore;
        this.examscore = examscore;
    }
    totalScore(){
        return this.testscore + this.examscore;
    }
}
const Student1 = new SeniorStudent("Michael", 30, 60);
const Student2 = new SeniorStudent("Sophia",35,60); 
console.log(Student1.name);
console.log(Student1.totalScore())
console.log(Math.max(Student1.totalScore(),Student2.totalScore()));

if(Student1.totalScore()>Student2.totalScore()){
 console.log(Student1.name+" has the higher score");
}
else{
 console.log(Student1.name+" has the lower score");
}

function displayResult(some){
    console.log(some)
}
let greet = function myFirst(){
    return "Hello";
}
displayResult(greet())
function mySecond(){
    return "2nd hello";
}

// From w3schools (i actually typed this)
function myDisplayer(some){
    document.getElementById("demo2").innerHTML = some;
    console.log(some);
}
function myCalculator(num1,num2){
    let sum = num1+num2;
    return sum;
}
console.log(myCalculator(20,10))
let result = myCalculator(5,5);
myDisplayer(result);