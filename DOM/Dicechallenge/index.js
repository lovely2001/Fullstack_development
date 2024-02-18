var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var image = "images/" + randomdiceimage;
document.querySelectorAll("img")[0].setAttribute("src", image);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
var image2 = "images/" + randomdiceimage2;
document.querySelectorAll("img")[1].setAttribute("src", image2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent = " Player1 wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent = "Player2 wins";
}
else{
    document.querySelector("h1").textContent = "DRAW";
}

