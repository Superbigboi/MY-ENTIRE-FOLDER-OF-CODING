let randomNum = Math.random();
console.log(randomNum);

let x = Math.round(4.6);
console.log(x);

let a = Math.floor(4.6);
console.log(a);

let b = Math.ceil(4.6);
console.log(b); 

let c = Math.trunc(4.6);
console.log(c);

let d = Math.sign(-60);
console.log(d);

let e = Math.sign(4);
console.log(e);

let f = Math.sign(0);
console.log(f);

let g = Math.pow(2,3);
console.log(g);

let h = Math.sqrt(81);
console.log(h);


let i = 1;
if(10>i){
    console.log(Boolean(null))
}
let j = 5;
console.log(Boolean(j==="5"));
console.log(j!="5");
console.log(j>=6);

if(j=5 && j!=3){
    console.log("correct")
}

console.log(inputvalue);


function CheckNum(){
let y =document.getElementById("inputValue").value;
let Check = Number(y)

// console.log(Check);
if(Check>=1){
    // document.getElementById("demo") = "The Number you put is positive";
    console.log('The number you put is positive');
    alert("The number you put is positive")
}         
else if(Check<=1 && Check !=0){
    // document.getElementById("demo") = "the number you typed is negative";
    console.log('The number you put is negative')
    alert("The number you typed is negative")
}
    else{
        // document.getElementById("demo") = "the number you typed is 0";
        console.log('The number you put is 0')
        alert("The number you put is 0")
        
    }
}

// || is OR 
// $$ is ADD
// ! is NOT