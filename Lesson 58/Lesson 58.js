let button = document.getElementById("click");
let navi = document.getElementById("nav");


var count = 0;
function toggler() {
  if(navi.style.display === "block"){
    navi.style.display = "none";
    console.log("clicked none")
  }
  else{
    navi.style.display = "block";
    console.log("clicked block")
  }
}

const text = document.getElementById('pwd');
const change = document.getElementById("hs");
change.addEventListener('click', () => {
  if (text.type === 'password') {
    text.type = 'text';
  } else {
    text.type = 'password';
  }
});