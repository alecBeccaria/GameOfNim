var playerInfo1 = document.getElementById("player1");
var playerInfo2 = document.getElementById("player2");
var ele = document.getElementsByName('difficulty');

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

    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        localStorage.setItem("mode", ele[i].value);
    }

    alert("Settings Saved.");
    window.location.href = "./game.html";
}