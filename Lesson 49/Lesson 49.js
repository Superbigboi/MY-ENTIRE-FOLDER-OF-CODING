try{
    addalert("Hello world");
}
catch(err){
    document.getElementById("demo").innerHTML=err.message;
}
finally{
    console.log("this is final code")
}
x=2;
errMessage = "you are wrong"
const check = () => {
    let inputValue = document.getElementById("inputValue").value;

    if(Number(inputValue)>x){
        document.getElementById("demo").innerHTML="you are correct";
        console.log("you are correct");
    }
    else{
        throw errMessage
    }
}

// let message = "this is a mess age (get it message - mess age)";
try{
    console.log(message)

}
catch{

}