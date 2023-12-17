$("#btn").click(()=>{
//    let user = window.prompt("Hello Friend, what is your name?");
//     if (user != null){
//         alert("Hi "+ user +", you are welcome to my file!")
//     }
$("#demo").before("<p>You're welcome</p>")
})
$("#add").click(()=>{
    // $("p").prepend("<b>Prepended text</b>. ");
    // $("#em").prepend("<label class='form-label'>Email:</label>");
    // $("#em").prepend("<label class='form-label'>Email:</label>");
    var stat = $("#num").val();
    let b = 1;
    var uid = parseInt(stat) + parseInt(b);
    $("#num").val(uid);
    $("#nemail").append("<div class='input-group nemail"+uid+"'><input type='email' class='form-control mt-2' placeholder='Enter email "+uid+"' name='email"+uid+"'> <button type='button' class='btn mx-2 px-0 input-group-text' onclick='Del("+uid+")'><i class='fa-solid fa-trash-can'></i></button></div>");
    $("#nemail").append("");
    $("#nemail").append("");
    console.log("")
})
function Del(str){
    var uid = str;
    // Replaces the
    $(".nemail"+uid).text('deleted email '+uid);
    var stat = $("#num").val();
    var b = 1
    var uid = parseInt(stat) - parseInt(b);
    $('#num').val(uid);
}