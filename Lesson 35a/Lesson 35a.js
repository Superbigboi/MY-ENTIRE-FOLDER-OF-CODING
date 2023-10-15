let seconds = 0;
let tenths = 0;

const displayTenths = document.getElementById("tenths");
const displaySeconds = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("restart");
let interval;

startBtn.onclick = () => {
    clearInterval(interval);
    interval = setInterval(timer, 10);
}
pauseBtn.onclick = () => {
    clearInterval(interval);
}
stopBtn.onclick = () => {
    tenths = 0;
    seconds = 0;
    displayTenths.innerHTML = `0${tenths}`;
    displaySeconds.innerHTML = `0${seconds}`;
}
const timer = () =>{
tenths++;

if (Number(tenths)<=9){
    displayTenths.innerHTML=`0${tenths}`;
}
if (Number(tenths)>9){
    displayTenths.innerHTML=tenths;
}
if(Number(tenths)>99){
    seconds++
    displaySeconds.innerHTML=`0${seconds}`;
    tenths=0;
    displayTenths.innerHTML=`0${tenths}`;

}
if (Number(seconds)>9){
    displaySeconds.innerHTML= seconds;
}
}


// startBtn.innerHTML = "changed"

// let count = 0;
// function counter(){
//     count ++;
//     document.getElementById("seconds").innerText = count
//     return;
// }