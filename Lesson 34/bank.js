class Bank{
    constructor(balance){
        this.balance=balance;
    }
    deposit(amount, balanceValue){
        this.balance += amount;
        window.alert(`you deposited $${amount}`)
        balanceValue=document.getElementById("balance").innerText=`$${this.balance}`;
    }
    withdraw(amount, balanceValue) {
        if (this.balance - amount <= 0){
           window.alert("╰（‵□′）╯ You can't withdraw more than your balance, are you trying to STEAL from us? We are a up and coming bank and we are low on money and people have been stealing from us lately, and we don't want be bankrupy lol, wait we  A R E  the bank, we cant be broke, so please make sure about the amount of money your are withdrawing so that we both dont go broke (●'◡'●) ");
           balanceValue = document.getElementById("balance").innerText=`$${this.balance}`
            return;
        }
        this.balance -= amount;
        window.alert(`you withdrew $${amount}`)
        balanceValue = document.getElementById("balance").innerText=`$${this.balance}`;
    }
}
michaelAccount = new Bank(1100);

const depositBtn=document.getElementById("deposit");
const withdrawBtn=document.getElementById("withdraw");
const balanceValue=document.getElementById("balance");
const inputAmount=document.getElementById("inputValue");

depositBtn.onclick = () =>{
    let amount = Number(inputAmount.value);
    michaelAccount.deposit(amount);
    console.log("this should work deposit")
}
withdrawBtn.onclick = () =>{
    let amount = Number(inputAmount.value);
    michaelAccount.withdraw(amount);
    console.log("this should work withdraw")
}

