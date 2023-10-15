function infoM(){
    let Fname = document.getElementById('nameInput').value;
    let age = document.getElementById('ageInput').value;
    let gender = document.getElementById('genderInput').value;

    let information = new Map([["name", Fname],["age",age],["gender",gender]]);
    console.log(information);
    console.log(age);
    console.log(Fname);
    console.log(gender);
    alert("hello "+Fname+", your are "+age+" years old, and you are a "+gender);
}