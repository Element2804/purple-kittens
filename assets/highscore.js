var scoreList = document.createElement("ul");
var scoreBox = document.querySelector("#score-box");
var getScore = localStorage.getItem("score");
var getInitial = JSON.parse(localStorage.getItem("initials"));
var liScore = document.createElement("li");

function generate () {
  scoreBox.appendChild(scoreList);
  scoreList.appendChild(liScore);
  liScore.textContent = getInitial + " Scored " + getScore;
  
}

generate();