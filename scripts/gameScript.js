const row1Btn = document.getElementById("row1");
const row2Btn = document.getElementById("row2");
const row3Btn = document.getElementById("row3");
const row4Btn = document.getElementById("row4");

//Table
var table = document.getElementById("nimGame");

const removeStone = (rowNum) =>{
    
    for (let row of table.rows)  {

        for(let cell of row.cells) 
        {
        let val = cell.innerText; // your code below
        }
    }
    console.log(rowNum);
}