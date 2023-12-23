$("#empty").click(()=>{
    $("#container").empty()
})
$("#remove").click(()=>{
    $("#container").remove()
})
$("#width").click(()=>{
    let gwidth =  $("#container").outerWidth(true);
    alert(gwidth);
})
$("#height").click(()=>{
    let gheight =  $("#container").outerHeight(true);
    alert(gheight);
})
let x = "<div class='style mt-2' id='container' <h1>Header</h1> <p>Paragraph</p> <p>Graph</p> </div>"
$("#restore").click(()=>{
    $('body').append(x)
    }
)

$("#addStyle").click(()=>{
    $("#w").addClass("red add")
})
$("#removeStyle").click(()=>{
    $("#w").removeClass("red add")
})
$("#toggleStyle").click(()=>{
    $("#w").toggleClass("red")
})
$("#addSty").click(()=>{
    $("#sm").addClass("white")
})
$("#removeSty").click(()=>{
    $("#sm").removeClass("white")
})
$("#toggleSty").click(()=>{
    $("#sm").toggleClass("white")
})

$("#style").click(()=>{
    $("#aC").css({"color":"white","background-color":"black","width":"300px","font-family":"Impact"})
})
$("#Rstyle").click(()=>{
    $("#aC").css({"color":"black","background-color":"white","font-family":"Arial"})
})