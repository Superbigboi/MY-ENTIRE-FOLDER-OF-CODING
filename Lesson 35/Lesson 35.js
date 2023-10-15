function Delete(){
    let time=new Date();
    console.log(time)
    console.log("logDelete")
    document.getElementById("delete").innerHTML=time;
    let y=4;
    var x=10;
    console.log(x)
    console.log("y")

}
// document.getElementById("deletebtn").onmouseout(()=>{
//     document.getElementById("delete").innerHTML="gone";
// })
let nam="We are done for \"today\"";
let name="Michael";

document.getElementById("delete").innerHTML=name;
let totalchar=name.length;
console.log(totalchar)


let fruits="apple, banana, kiwi";
let myfruit = fruits.substr(7);
console.log(myfruit);

function replaceText(){
    let feeling=document.getElementById("feel").innerHTML;
    document.getElementById("feel").innerHTML= feeling.replace("Today","You");
}

let cat = "i love Cats. Cars are very easy to love. Cats are popular.";
cat= cat.replaceAll("Cats","Dogs");
cat=cat.toUpperCase();
document.getElementById("demo").innerHTML=cat;
console.log(cat);

let random="";
console.log(random.trim());