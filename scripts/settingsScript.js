var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");
var difficulty = document.getElementById("difficulty");

function test(e) {
    e.preventDefault();

    if (playerInfo1 != null) {
        localStorage.setItem("player1", playerInfo1.value);
    }
    if (playerInfo2 != null) {
        localStorage.setItem("player2", playerInfo2.value);
    } 

    localStorage.setItem("mode", difficulty.value);

    alert("Settings Saved.");
    window.location.href = "index.html";
}