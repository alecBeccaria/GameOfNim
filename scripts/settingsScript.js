var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");
var isBot = document.getElementById("isBot");

function test(e) {
    e.preventDefault();

    if (playerInfo1 != null) {
        localStorage.setItem("player1", playerInfo1.value);
    }
    if (playerInfo2 != null) {
        localStorage.setItem("player2", playerInfo2.value);
    } 

    if (isBot.value == "human") {
        localStorage.setItem("isBot", "person");
    }
    else {
        localStorage.setItem("isBot", "comp");
    }

    alert("Settings Saved.");
    window.location.href = "index.html";
}