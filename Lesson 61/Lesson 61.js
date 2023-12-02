// Set time interval with external function
setInterval(time, 1000);


function time(){
    let d = new Date();
    document.getElementById("demo").innerHTML = d.getHours() + ":" 
    + d.getMinutes() + ":" + d.getSeconds() + " "
}
// // Set time interval with a function inside it
// setInterval(function myFunction(){

// }, 1000)

let s = document.getElementById("sect");

$(document).ready(function(){
    $("#hide").click(function(){
        console.log("hiding");
        $("#sect").fadeOut();
    });
    $("#show").click(function(){
        console.log("showing");
        $("#sect").fadeIn();
    });
    $("#toggle").click(function(){
        console.log("toggling");
        $("#sect").toggle();
    });    
});
