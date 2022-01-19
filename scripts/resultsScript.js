const resultsDiv = document.getElementById("results");

var winNum = localStorage.getItem("winner");

resultsDiv.innerHTML = `Player ${winNum} Wins!`;