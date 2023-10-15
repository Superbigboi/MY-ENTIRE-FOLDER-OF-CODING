function converter_celcius(){
    let c = document.getElementById("input_a").value;
    let answer = (c-32)*5/9
    document.getElementById("result-a").innerText=`This is ${answer} degress  in celcius`;
    console.log(answer)
}
// 5/9 * (f-32) = formula to convert Fahrenheit to Celsuis


// 32 degress Fahrenheit = 0 degress celsuis
// 212 degress Fahrenheit = 100 degress celsuis
