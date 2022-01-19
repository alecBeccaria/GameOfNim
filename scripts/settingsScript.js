var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");
var difficulty = document.getElementById("difficulty");

function test(e) {
    e.preventDefault();

    if (playerInfo1 != null && playerInfo1.value != "") {
        localStorage.setItem("player1", playerInfo1.value);
    }else{
        localStorage.setItem("player1", "Player 1")
    }
    if (playerInfo2 != null && playerInfo2.value != "") {
        localStorage.setItem("player2", playerInfo2.value);
    } else{
        localStorage.setItem("player2", "Player 2")
    }

    localStorage.setItem("mode", difficulty.value);

    alert("Settings Saved.");
    window.location.href = "index.html";
}