var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");

function test(e) {
    e.preventDefault();

    if (playerInfo1 != null) {
        localStorage.setItem("player1", playerInfo1.value);
    }
    if (playerInfo2 != null) {
        localStorage.setItem("player2", playerInfo2.value);
    } 

    alert("Settings Saved.");
    window.location.href = "index.html";
}