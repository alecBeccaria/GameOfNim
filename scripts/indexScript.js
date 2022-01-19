var newGame = document.getElementById("newGame");
var rules = document.getElementById("rules");

function button() {

}
newGame.addEventListener("click", e=>{
    location.href = "./settings.html";
})
rules.addEventListener("click", e=>{
    location.href = "./rules.html";
})
