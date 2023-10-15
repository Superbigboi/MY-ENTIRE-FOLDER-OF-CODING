let Name =  document.getElementById('name');
let age =  document.getElementById('age');
let address =  document.getElementById('address');
function ShowInfo(){
    alert(`Hello, ${Name.value} and you are ${age.value} years old, and you live in ${address.value}`);
    console.log(`Hello, ${Name.value} and you are ${age.value} years old, and you live in ${address.value}`);
}

let prices = [500, 5000, 2500, 3000, 2000, 5000];
let text = "";
prices.forEach(function (price) {
    text += price + "<br>";
});
document.getElementById("pricelist").innerHTML = text;

let newText = "";

let newPrices = prices.map(function(price){
    return price *1.5;
})
newPrices.forEach(function(lPrice){
    newText += lPrice + "<br>";
})
document.getElementById("newpricelist").innerHTML = newText;

let items = [500,750,1000,1500,2000,2500];
let newitem =  items.filter(function(nItem){
    return nItem <=1000;
}
)
console.log(newitem);

let sales = [500, 750, 1000]
let totalSales = sales.reduce(function(a, b){
    return a+b;
}
)
console.log(totalSales);