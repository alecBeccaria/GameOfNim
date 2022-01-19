const row1Btn = document.getElementById("row1");
const row2Btn = document.getElementById("row2");
const row3Btn = document.getElementById("row3");
const row4Btn = document.getElementById("row4");

var chosenRow = 0;
var playerTurn = 0;
var stoneCount = 16;




//Table
var table = document.getElementById("nimGame");

const endTurn = () => {
    chosenRow = 0;
    playerTurn++;
    if(stoneCount == 0){
        if(playerTurn % 2 == 0){
            console.log("Player 1 wins");
        }else{
            console.log("Player 2 wins");
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