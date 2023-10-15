function greeting(){
    document.getElementById("demo").innerHTML = "Hello, how are you?";
}
function respond(){
    document.getElementById("demo").innerHTML = "I am fine, thank you";
}

// let x=3;
// document.getElementById("demo1").innerHTML = x;

let a=6;
let b=4;
let c=a+b;
console.log(c)

let d=7
console.log(a*b/(c*d))

console.log(d)
d=10;
console.log(d)
d--;
console.log(d)

let x="5";
let y=5;
if(x==y){
    console.log("x and y are equal");
}
else{
    console.log("x and y are not equal");
}

let f=5;
let g=6;
    if(f>g){
        console.log("f is greater than g");
    }
    else{
        console.log("g is less than f");
    }

    let interval;
    let count = 0;

    const counter = ()=>{
        interval = setInterval(() =>{
            count++;
            document.getElementById("demo1").innerHTML=count;
            return;
        },10)
    }
    const stop = () => {
        clearInterval(interval);
    } 

        function reset() {
            clearInterval(interval);
            count=0;
            document.getElementById("demo1").innerHTML=count; 
        }


