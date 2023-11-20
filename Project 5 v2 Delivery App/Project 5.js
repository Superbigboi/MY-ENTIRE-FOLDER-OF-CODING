let cardPasta = document.getElementById("pasta-card")
let cardSalad = document.getElementById("salad-card")
let cardDessert = document.getElementById("dessert-card")

let pastaDesc = document.getElementById("pasta-desc");
let saladDesc = document.getElementById("salad-desc");
let dessertDesc = document.getElementById("dessert-desc");

cardPasta.addEventListener("click",()=>{
    pastaDesc.style.display = "block";
    saladDesc.style.display = "none";
    dessertDesc.style.display = "none";
    cardPasta.classList.add("cardP")
    cardSalad.classList.remove("cardP")
    cardDessert.classList.remove("cardP")

})
cardSalad.addEventListener("click",()=>{
    saladDesc.style.display = "block";
    pastaDesc.style.display = "none";
    dessertDesc.style.display = "none";
    cardSalad.classList.add("cardP")
    cardPasta.classList.remove("cardP")
    cardDessert.classList.remove("cardP")
})
cardDessert.addEventListener("click",()=>{
    dessertDesc.style.display = "block";
    saladDesc.style.display = "none";
    pastaDesc.style.display = "none";
    cardDessert.classList.add("cardP")
    cardSalad.classList.remove("cardP")
    cardPasta.classList.remove("cardP")
})