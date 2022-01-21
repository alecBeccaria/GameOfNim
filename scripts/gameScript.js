const row1Btn = document.getElementById("row1");
const row2Btn = document.getElementById("row2");
const row3Btn = document.getElementById("row3");
const row4Btn = document.getElementById("row4");
const nimGame = document.getElementById("nimGame");
const playerTurn1 = document.getElementById("playerRock1");
const playerTurn2 = document.getElementById("playerRock2");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const difficulty = localStorage.getItem("mode");


var chosenRow = 0;
var playerTurn = 0;
var stoneCount = 16;

console.log(difficulty);

if (difficulty === "easy") {
    stoneCount = 9;
    nimGame.innerHTML = `<table BORDER=0 cellpadding="1" cellspacing="1" id="nimGame">
    <tr align="center" valign="top">
        <td COLSPAN="3"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgA1"></td>
        <td COLSPAN="3"></td>
        <td width="59" valign="middle"><button id="row1" type="button" class="button" onClick="removeStone(1)"
                value="Row 1">Row 1</button>
        </td>
    </tr>
    <tr align="center" valign="top">
        <td COLSPAN="2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB1"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB3"></td>
        <td COLSPAN="2"></td>
        <td width="59" valign="middle"><button id="row2" type="button" class="button" onClick="removeStone(2)"
                value="Row 2">Row 2</button>
        </td>
    </tr>
    <tr align="center" valign="top">
        <td width="32"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC1"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC3"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC4"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC5"></td>
        <td width="32"></td>
        <td width="59" valign="middle"><button id="row3" type="button" class="button" onClick="removeStone(3)"
                value="Row 3">Row 3</button>
        </td>
    </tr>
    <tr align="center" valign="middle">
        <td height="70" colspan="7">
            &nbsp;
        </td>
        <td height="70"><button name="button2" type="button" class="button2" onClick="endTurn()"
                >End Turn</button>
        </td>
    </tr>
</table>`;
} else if (difficulty === "medium") {
    stoneCount = 16;
    nimGame.innerHTML = `<table BORDER=0 cellpadding="1" cellspacing="1" id="nimGame">
    <tr align="center" valign="top">
        <td COLSPAN="3"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgA1"></td>
        <td COLSPAN="3"></td>
        <td width="59" valign="middle"><button id="row1" type="button" class="button" onClick="removeStone(1)"
                value="Row 1">Row 1</button>
        </td>
    </tr>
    <tr align="center" valign="top">
        <td COLSPAN="2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB1"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgB3"></td>
        <td COLSPAN="2"></td>
        <td width="59" valign="middle"><button id="row2" type="button" class="button" onClick="removeStone(2)"
                value="Row 2">Row 2</button>
        </td>
    </tr>
    <tr align="center" valign="top">
        <td width="32"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC1"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC2"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC3"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC4"></td>
        <td width="32"><img SRC="assets/Stone1.png" id="imgC5"></td>
        <td width="32"></td>
        <td width="59" valign="middle"><button id="row3" type="button" class="button" onClick="removeStone(3)"
                value="Row 3">Row 3</button>
        </td>
    </tr>
    <tr align="center" valign="top">
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD1"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD2"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD3"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD4"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD5"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD6"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD7"></td>
        <td WIDTH="59" valign="middle"><button id="row4" type="button" class="button" onClick="removeStone(4)"
                value="Row 4">Row 4</button>
        </td>
    </tr>
    <tr align="center" valign="middle">
        <td height="70" colspan="7">
            &nbsp;
        </td>
        <td height="70"><button name="button2" type="button" class="button2" onClick="endTurn()"
                >End Turn</button>
        </td>
    </tr>
</table>`;
} else {
    stoneCount = 25;
    nimGame.innerHTML = `<table BORDER=0 cellpadding="1" cellspacing="1" id="nimGame">
        <tr align="center" valign="top">
            <td COLSPAN="4"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgA1"></td>
            <td COLSPAN="4"></td>
            <td width="59" valign="middle"><button id="row1" type="button" class="button" onClick="removeStone(1)"
                    value="Row 1">Row 1</button>
            </td>
        </tr>
        <tr align="center" valign="top">
            <td COLSPAN="3"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgB1"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgB2"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgB3"></td>
            <td COLSPAN="3"></td>
            <td width="59" valign="middle"><button id="row2" type="button" class="button" onClick="removeStone(2)"
                    value="Row 2">Row 2</button>
            </td>
        </tr>
        <tr align="center" valign="top">
            <td COLSPAN="2"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgC1"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgC2"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgC3"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgC4"></td>
            <td width="32"><img SRC="assets/Stone1.png" id="imgC5"></td>
            <td COLSPAN="2"></td>
            <td width="59" valign="middle"><button id="row3" type="button" class="button" onClick="removeStone(3)"
                    value="Row 3">Row 3</button>
            </td>
        </tr>
        <tr align="center" valign="top">
            <td WIDTH="32"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD1"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD2"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD3"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD4"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD5"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD6"></td>
            <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD7"></td>
            <td WIDTH="32"></td>
            <td WIDTH="59" valign="middle"><button id="row4" type="button" class="button" onClick="removeStone(4)"
                    value="Row 4">Row 4</button>
            </td>
        </tr>
        <tr align="center" valign="top">
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD1"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD2"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD3"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD4"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD5"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD6"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD7"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD8"></td>
        <td WIDTH="32"><img SRC="assets/Stone1.png" id="imgD9"></td>
        <td WIDTH="59" valign="middle"><button id="row4" type="button" class="button" onClick="removeStone(5)"
                value="Row 5">Row 5</button>
        </td>
    </tr>
        <tr align="center" valign="middle">
            <td height="70" colspan="9">
                &nbsp;
            </td>
            <td height="70"><button name="button2" type="button" class="button2" onClick="endTurn()"
                    >End Turn</button>
            </td>
        </tr>
    </table>`;
}






//Table
var table = document.getElementById("nimGame");
playerTurn2.style.visibility = "hidden";

player1Name.innerHTML = localStorage.getItem("player1");
player2Name.innerHTML = localStorage.getItem("player2");


const endTurn = () => {
    chosenRow = 0;
    playerTurn++;
    if (playerTurn % 2 == 0) {
        playerTurn1.style.visibility = "visible";
        playerTurn2.style.visibility = "hidden";
    } else {
        playerTurn1.style.visibility = "hidden";
        playerTurn2.style.visibility = "visible";
    }
    if (stoneCount == 0) {
        if (playerTurn % 2 == 0) {
            console.log("Player 1 wins");
            localStorage.setItem("winner", localStorage.getItem("player1"));
            window.location.href = "./results.html";
        } else {
            console.log("Player 2 wins");
            localStorage.setItem("winner", localStorage.getItem("player2"));
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