// function myFunction(a,b){
//     return a+b;
// }
// let result = myFunction(4,3);


function add(){
    let Firstnum = document.getElementById("number1").value;
    let Secnum = document.getElementById("number2").value;
    let answer = Number(Firstnum)+Number(Secnum);
    document.getElementById("result").innerText=answer;
}
function subtract(){
    let Firstnum = document.getElementById("number1").value;
    let Secnum = document.getElementById("number2").value;
    let answer = Number(Firstnum)-Number(Secnum);
    document.getElementById("result").innerText=answer;
}
function multiply(){
    let Firstnum = document.getElementById("number1").value;
    let Secnum = document.getElementById("number2").value;
    let answer = Number(Firstnum)*Number(Secnum);
    document.getElementById("result").innerText=answer;
}
function divide(){
    let Firstnum = document.getElementById("number1").value;
    let Secnum = document.getElementById("number2").value;
    let answer = Number(Firstnum)/Number(Secnum);
    document.getElementById("result").innerText=answer;
}

let x=add(6,2,2)
document.getElementById("test").innerText=x
function myFunction(a,b,c){
    return a*b*c;
}