const row1Btn = document.getElementById("row1");
const row2Btn = document.getElementById("row2");
const row3Btn = document.getElementById("row3");
const row4Btn = document.getElementById("row4");
const playerTurn1 = document.getElementById("playerRock1");
const playerTurn2 = document.getElementById("playerRock2");


var chosenRow = 0;
var playerTurn = 0;
var stoneCount = 16;




//Table
var table = document.getElementById("nimGame");
playerTurn2.style.visibility = "hidden";


const endTurn = () => {
    chosenRow = 0;
    playerTurn++;
    if(playerTurn % 2 == 0) {
        playerTurn1.style.visibility = "visible";
        playerTurn2.style.visibility = "hidden";
    }else{
        playerTurn1.style.visibility = "hidden";
        playerTurn2.style.visibility = "visible";
    }
    if(stoneCount == 0){
        if(playerTurn % 2 == 0){
            console.log("Player 1 wins");
            localStorage.setItem("winner", "1");
            window.location.href = "./results.html";
        }else{
            console.log("Player 2 wins");
            localStorage.setItem("winner", "2");
            window.location.href = "./results.html";
        }
        console.log("ended");
    }
    
}


const removeStone = (rowNum) => {
    
    if (chosenRow == 0) {
        chosenRow = rowNum;

    }

    if (chosenRow == rowNum) {
        row = table.rows[rowNum - 1];
        for (var j = 0, col; col = row.cells[j]; j++) {
            var img = col.children[0];
            if (img != undefined && img.tagName == "IMG") {
                img.remove();
                stoneCount -= 1;
                
                break;
            }
        }
    }
    

}