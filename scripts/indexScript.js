var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");
var isBot = document.getElementById("isBot");

function test() {
    localStorage.setItem("player1", "Player 1");
    localStorage.setItem("player2", playerInfo2.value);


    if (isBot.value == "human") {
        localStorage.setItem("isBot", "person");
    }
    else {
        localStorage.setItem("isBot", "comp");
    }

    alert("AAAH!!!");
    window.location.href = 'google.com'
}