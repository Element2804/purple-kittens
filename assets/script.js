var queOne = "Which function is used to serialize an object into a JSON string in Javascript?"
var queTwo = "Inside which HTML element do we put the JavaScript?"
var queThree = " The 'function' and 'var' are known as:"
var queFour = "The _______ method of an Array object adds and/or removes elements from an array."
var queFive ="What is the default value of an uninitialized variable?"


//question choices
var choiceOne = ["1. stringify()", "2. parse()", "3. convert()", "4. cookies()"];
var choiceTwo = ["1. <js>", "2. <espresso>", "3. <javascript>", "4. <script>"];
var choiceThree = ["1. Keywords", "2. Data Types", "3. Declaration statements", "4. Dance Types" ]
var choiceFour = ["1. reverse", "2. shift", "3. splice", "4. shuffle"]
var choiceFive = ["1. NaN", "2. Nah", "3. undefined", "4. null" ]





var startButton = document.querySelector("#start");
var mainBox = document.querySelector("#quiz-intro");
var queBox = document.querySelector("#quiz-info");
var queNumber = 1;
var countDown = document.querySelector("#count");
var count = 100;
var score = 0;
var makeNav = document.createElement("nav");
var urlHigh = "assets/highscore.html";

//hides instructions and starts game
function startGame() {

    mainBox.setAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");


startTime();

document.getElementById("quiz-info").appendChild(makeNav);

runGame();
}


//starts and stops timer
function startTime () {

    timer = setInterval(function() {
        count--;
        countDown.textContent = count
     
        if (count >= 0) {
            if (count === 0) {
                clearInterval(timer);
            } if (queNumber >= 5){
                clearInterval(timer);
            }
        }
        
    
    
    }, 1000);
    return;
}
//asigns the answers to the questions
function runGame(){
    
    if (queNumber === 1){
        makeNav.innerHTML = queOne;
        answer = "1";
        createButtons(choiceOne, answer);
    }
    if (queNumber === 2){
        makeNav.innerHTML = queTwo;
        answer = "4";
        createButtons(choiceTwo, answer);
    }
    if (queNumber === 3){
        makeNav.innerHTML = queThree;
        answer = "2";
        createButtons(choiceThree, answer);
    }
    if (queNumber === 4){
        makeNav.innerHTML = queFour;
        answer = "3";
        createButtons(choiceFour, answer);
    }
    if (queNumber === 5){
        makeNav.innerHTML = queFive;
        answer = "3";
        createButtons(choiceFive, answer);
    }

}
//for loop to make buttons
function createButtons(arr, corAnswer) {
    var makeUl = document.createElement("ul");
    makeUl.setAttribute("id", "quechoices")
    makeNav.appendChild(makeUl);
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.classList.add(i+1);
        var text = document.createTextNode(arr[i]);        
        makeUl.appendChild(li);
        button.appendChild(text);
        li.appendChild(button);   
      }

      isCorrect(corAnswer);
      return;
}
//removes last question
function nextQuestion() {
    document.getElementById("quechoices").remove();
    queNumber++;
    runGame();
    }


//verifies the answers and decrements 10 on incorrect
function isCorrect (answer){
    var queChoices = document.getElementById("quechoices");
    queChoices.addEventListener("click", function(event){
        event.stopPropagation();
        if(!event.target.classList.contains(answer)){
            count -= 10;
        }
        if (queNumber > 4){
            queBox.setAttribute("class", "hidden");
            allDone();
        } if (event.target.classList.contains(answer)){
            score ++;
        }
        nextQuestion();
    })
    return;
}



//shows score
function allDone() {
    var putScore = document.getElementById("highscore");
    var makeForm = document.createElement("input");
    var showScore = document.createElement("h1");
    var plsEnter = document.createElement("h2");
    var subButton = document.createElement("button");
    subButton.setAttribute("id", "submit");
 

    score = count
    putScore.appendChild(showScore);
    putScore.appendChild(plsEnter);
    putScore.appendChild(makeForm);
    putScore.appendChild(subButton);
   

    subButton.textContent = "Submit your initials"
    showScore.textContent = "Your score is " + count + "!";
    plsEnter.textContent = "Please enter your initials";    
    makeForm.setAttribute("class", "initials");

    
    
    subButton.addEventListener("click", submitScore);

  return;
   
}

function goHighscore() {
    document.location.replace(urlHigh);
}

//enters score into local storage
function submitScore() {
    var initialVal = document.querySelector(".initials").value;

localStorage.setItem("initials", JSON.stringify(initialVal))
localStorage.setItem("score", JSON.stringify(score));

goHighscore();
}


startButton.addEventListener("click", startGame);


