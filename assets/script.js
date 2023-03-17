var startButton = document.querySelector(".start");
var countDown = document.querySelector("#count");
var count = 100;


startButton.addEventListener("click", function() {
    if (count > 1)
    count--;
    countDown.textContent = count;


}, 100);