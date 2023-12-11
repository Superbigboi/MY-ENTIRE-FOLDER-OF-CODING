// Set time interval with external function
// setInterval(time, 1000);


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
    $("#fade").click(function(){
        $(".sect").fadeTo(2000, 0.4);
    });
    $("#hide").click(function(){
        $(".sect").fadeOut();
    });
    $("#show").click(function(){
        $(".sect").fadeIn();
    });
    $("#toggle").click(function(){
        $(".sect").toggle();
    });    
    $("#ftoggle").click(function(){
        $(".sect").fadeToggle(300);
    });

    $("#slide-up").click(function(){
        $(".rectangle").slideUp();
    });    
    $("#slide-down").click(function(){
        $(".rectangle").slideDown();
    });    
    $("#slide-toggle").click(function(){
        $(".rectangle").slideToggle();
    });    
    $("#animation").click(function(){
        $(".circle").animate({
            left: '250px',
            height: "+=50px",
            width: "+=50px",
            // height:"toggle",
            },1000);
    }); 
    $("#animate").click(function(){
        let x = $(".square-1");
        console.log("clo")
        x.animate({width:'200px',opacity:'0.2'},500);
        x.animate({height:'200px',opacity:'0.4'},500);
        x.animate({width:'100px',opacity:'0.7'},500);
        x.animate({height:'100px',opacity:'1'},500);
    })
});

// setInterval(function myFunction(){
//     $("#sect").fadeToggle(2000);
// },500)
