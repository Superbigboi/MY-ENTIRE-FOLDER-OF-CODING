function btn(){
    document.getElementById("img").style.display = "none";
}
function btnShow(){
    document.getElementById("img").style.display = "";
}
function myFunction(){
     document.getElementById("demo").innerHTML = "This paragraph has changed";
     window.alert("everything will change");
     console.log("Hello alert")
     document.write(5+2)
}
function escape(){
    alert("The first paragraph will change!");
    document.getElementById("lol").innerHTML = "its changed lol";
}
function greeting(){
    document.getElementById("demo").innerHTML = "Hello, how are you?";
}
function respond(){
    document.getElementById("demo").innerHTML = "I am fine, thank you";
}

let x=3;
document.getElementById("demo1").innerHTML = x;