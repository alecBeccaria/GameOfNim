function test() {
    var playerInfo1 = document.getElementById("player1").value;
    var playerInfo2 = document.getElementById("player2").value;
    var isBot = document.getElementById("isBot");

    alert("Saving Page... Do not turn off computer");

    if (playerInfo1 == null) {
        localStorage.setItem("player1", playerInfo1.value);
    }
    if (playerInfo2 == null) {
        localStorage.setItem("player2", playerInfo2.value);
    }

    if (isBot.value == "human") {
        localStorage.setItem("isBot", "person");
    }
    else {
        localStorage.setItem("isBot", "comp");
    }
}