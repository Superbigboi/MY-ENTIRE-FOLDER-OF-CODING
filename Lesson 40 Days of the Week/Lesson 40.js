let WeekDays = ["", "Monday", "Tuesday","Wednesday","Thursday","Friday"];
function MyDay(){
    let Index = document.getElementById("inputValue").value;
    let DayIndex = Number(Index);
    let Day = WeekDays[DayIndex];
    document.getElementById("correctDay").innerHTML = Day;
}
// let fruits = ["Orange", "Mango"];
// // fruits.unshift("Cashew");
// // fruits.shift();
// // let fruit = fruits.toString(); 
// let fruit = fruits.join("*")
// console.log(fruit);

let MyGirls = ["Esther","Abigal"];
let MyBoys = ["John","Peter"];
let AdoptChildren = ["Romeo","Juliet"]
let MyChildren = MyGirls.concat(MyBoys,AdoptChildren);
// let MainChildren = MyChildren.splice(4,5)
MyChildren.reverse();
console.log(MyChildren);
let points = [40,10,25,100,1,5];
// function checkpoint(a,b){
//     return a-b;
// }
// let sortedPoint = points.sort(checkpoint);
let sortedPoint = points.sort(function(a,b){return a-b;});
console.log(sortedPoint);