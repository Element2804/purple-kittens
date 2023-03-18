var startButton = document.querySelector(".start");
var countDown = document.querySelector("#count");
var count = 100;
var score = 0;



function startGame() {

    quiz.setAttribute("class", "hidden");

//what question is it
startTime();

}

function startTime () {

    timer = setInterval(function() {
        count--;
        countDown.textContent = count
        //check if count is 0 or done here
        if (count >= 0) {
            if (count === 0) {
                clearInterval(timer);
            }
        }
    
    
    }, 1000);

}


startButton.addEventListener("click", startGame);
