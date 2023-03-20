//questions
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
//var textStuff = document.createTextNode();





function startGame() {

    mainBox.setAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");


startTime();

document.getElementById("quiz-info").appendChild(makeNav);

runGame();
}



function startTime () {

    timer = setInterval(function() {
        count--;
        countDown.textContent = count
        //check if count is 0 or done here
        if (count >= 0) {
            if (count === 0) {
                clearInterval(timer);
            } if (queNumber > 5){
                clearInterval(timer);
            }
        }
        
    
    
    }, 1000);

}

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
   
}

function nextQuestion() {
    document.getElementById("quechoices").remove();
    queNumber++;
    runGame();
    }


function isCorrect (answer){
    var queChoices = document.getElementById("quechoices");
    queChoices.addEventListener("click", function(event){
        event.stopPropagation();
        if(!event.target.classList.contains(answer)){
            count -= 10;
        }
        nextQuestion();
    })

}


startButton.addEventListener("click", startGame);
