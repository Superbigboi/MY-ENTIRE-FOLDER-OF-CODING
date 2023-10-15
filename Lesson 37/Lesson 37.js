let name1="Michael";
let city="London";
// console.log(`My name is ${name1} and I live in ${city}`);
// document.getElementById("demo").innerHTML=()

let introduction = "My name is "+name1+" and I live in " + city
console.log(introduction.indexOf("is"));

console.log(introduction.search("and"));

let cities = "Abuja,Lagos,Houston,Dallas";
const myCity = cities.split(",");
myCity.unshift("London");
console.log(myCity);
console.log(myCity[3]);

let rain="the rain in SPAIN mainly stays in the plain";
const rainArray = rain.matchAll("ain")
console.log(rainArray);

let linecat ="I like Cats, cats are easy to love, Cats are popular";
const catArray = linecat.matchAll(/cat/gi);
let result = Array.from(catArray);
document.getElementById("demo").innerHTML = result;
console.log(result);
console.log(linecat.includes("love"))
console.log(linecat.startsWith("s", 10))

