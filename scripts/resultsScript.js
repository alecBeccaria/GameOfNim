const resultsDiv = document.getElementById("results");

var winNum = localStorage.getItem("winner");

resultsDiv.innerHTML = `${winNum} Wins!`;

const newGame = ( ) => {
    window.location.href = "./settings.html"
}