console.log('Hello Sir');

const playerInfo1 = document.getElementById("player1");
const playerInfo2 = document.getElementById("player2");

function test() {
    if (playerInfo1.value.trim() === "") {
        localStorage.setItem("player1", "Player 1");
    }
    else {
        localStorage.setItem("player1", playerInfo1.value);
    }

    if (playerInfo2.value.trim() === "") {
        localStorage.setItem("player1", "Player 2");
    }
    else {
        localStorage.setItem("player1", playerInfo2.value);
    }
}