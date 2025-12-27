
document.querySelector("button").addEventListener("click", ()=>{
   var randomNumber1 = Math.floor((Math.random() * 6) + 1);
   var randomNumber2 = Math.floor((Math.random() * 6) + 1);
   var randomDiceAddress1 = "images/dice" + randomNumber1 +".png"
   var randomDiceAddress2 = "images/dice" + randomNumber2 +".png"
   document.querySelector(".img1").setAttribute("src", randomDiceAddress1)
   document.querySelector(".img2").setAttribute("src", randomDiceAddress2)
   if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!😌"
} else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "You Win 😀"
} else {
    document.querySelector("h1").textContent = "Computer Wins🥴"
}
}
)


    

