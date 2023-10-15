// Catching the Input Feeds
let billTotal = document.getElementById("billTotal");
let TipValue = document.getElementById("tip");
let perPerson = document.getElementById('result');
let people = document.getElementById('people');

let noPeople = Number(people.innerText);
const calculateBill = () => {
    
    // let perPersonTotal = Number(perPerson.innerText);
    let bill = Number(billTotal.value); 
    let tip = Number(TipValue.value)/100;
    let tipAmount = bill*tip;

    let totalAmount = bill + tipAmount;
    let eachPerson = totalAmount / noPeople;
    perPerson.innerText = `$${eachPerson.toFixed(2)}`;
}

const increasePeople = () => {
    noPeople += 1;
    people.innerText = noPeople;
    calculateBill();
}

const decreasePeople = () => {
    noPeople += -1;
    people.innerText = noPeople;
    if(noPeople<=0){
        alert('liar');
        noPeople = 1;
        people.innerText = noPeople;
        return;

    }
    else{
        // people.innerText = noPeople;
        calculateBill();
    }
}