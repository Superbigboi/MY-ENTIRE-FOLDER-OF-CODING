let x=5;
switch (x=6) {
    case 4:
    console.log("x is bigger");
    break;

    case 6:
    console.log("x is smaller");
    break;
}

let b=11;
switch (true) {
    case (b >=5 && b <= 10):
        console.log("you passed");
        break;
    
    case (b >=0 && b <=5):
        console.log("you failed");
        break;
    default:
        console.log("leave us alone");
}

function CS(){
    let Score = document.getElementById('inputValue').value;
    console.log(Score);
    
    switch (true) {
        case(Score>=1 && Score<= 10):
            document.getElementById("score").innerHTML= "You got "+Score + " out of 100, like how";
            document.getElementById("comment").innerHTML= "ur a FAILURE"
            alert("drop out of school and save ur money");
        
    
        case(Score>=11 && Score <=19):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML = "just how, HOW, out of 100";
            alert("how is this even possible????");
        
        case(Score>= 21&& Score <=29 ):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML = "aint now way u got this low";
            alert("this is just SAD");
        
        case(Score>= 30&& Score <=39):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML = "u can do better than this, hopefully";
        
        case(Score>= 40&& Score <=49):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "u were probably prcastinating on not studying, didnt study and now u barely failed";
        
        case(Score>= 50&& Score <=59):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "u BARELY passed, like as thin as ice";
            
        case(Score>= 60 && Score <=69):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "u barely passed, try harder next time";
            
        case(Score>= 70&& Score <=79):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "ur trying, and its enough to pass";
            
        case(Score>= 80&& Score <=89):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "not bad, not bad";
            
        case(Score>= 90&& Score <=99):
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "u got very high, nice";
            
        default:
            document.getElementById("score").innerHTML= "You got "+Score;
            document.getElementById("comment").innerHTML= "u really studied huh";
        }    
    // if(Score>100||Score<1){
    //     alert('stop playing');
    // }
    // else if(Score>=1 && Score<= 10){
    //     document.getElementById("score").innerHTML= "You got "+Score + " out of 100, like how";
    //     document.getElementById("comment").innerHTML= "ur a FAILURE"
    //     alert("drop out of school and save ur money");
    // }

    // else if(Score>=11 && Score <=19){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML = "just how, HOW, out of 100";
    //     alert("how is this even possible????");
    // }
    // else if(Score>= 21&& Score <=29 ){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML = "aint now way u got this low";
    //     alert("this is just SAD");
    // }
    // else if(Score>= 30&& Score <=39){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML = "u can do better than this, hopefully";
    // }
    // else if(Score>= 40&& Score <=49){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "u were probably prcastinating on not studying, didnt study and now u barely failed";
    // }
    // else if(Score>= 50&& Score <=59){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "u BARELY passed, like as thin as ice";
    // }    
    // else if(Score>= 60 && Score <=69){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "u barely passed, try harder next time";
    // }    
    // else if(Score>= 70&& Score <=79){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "ur trying, and its enough to pass";
    // }    
    // else if(Score>= 80&& Score <=89){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "not bad, not bad";
    // }    
    // else if(Score>= 90&& Score <=99){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "u got very high, nice";
    // }    
    // else if(Score>= 100){
    //     document.getElementById("score").innerHTML= "You got "+Score;
    //     document.getElementById("comment").innerHTML= "u really studied huh";
    // }    



}