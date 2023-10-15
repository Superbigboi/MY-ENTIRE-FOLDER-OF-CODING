let x = 2e4;
let y = 5e3;
console.log(x+y)
let a = Math.pow(2,4);
let b = Math.pow(5,3);
let c = a+b;
console.log(c)

let d=9.657;
console.log(d.toString());
console.log(d.toFixed(4));
console.log(d.toExponential() + d.toFixed()) ;
console.log(d.valueOf());
console.log(d.toExponential(4));

let p=[10,20,30,40,50];
console.log(p)


let cars = [];
cars[0] = "BMW";
cars[1] = "Volve";
cars[2] = "Honda";
console.log(cars.push("Toyota"));
console.log(cars);
console.log(cars.length);
let lastcarID = cars.length - 1;
console.log("The last car was " + (cars[lastcarID]));

let firstcar = cars[0];
console.log("The first car was " + (firstcar));


// what below is what is for the actual project
let items = [];

function add(){     
    let combine = document.getElementById("itemadd").value;
   items.push(combine);
   let tag = "<ul>";

    items.forEach(myFunction)
        tag += "</ul>"
        document.getElementById("text").innerHTML=tag;
    function myFunction(value){
        tag +="<li>"+value+"</li>";
    }
}