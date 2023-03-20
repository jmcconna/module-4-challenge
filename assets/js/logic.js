var mainTitleEl = document.querySelector("#mainTitle");
var questionBoxEl = document.querySelector("#questionBox");
var questionTextEl = document.querySelector("#questionText");
var answerBoxEl = document.querySelector("#answerBox");
var optionAPlaceholder = document.querySelector("#optionAPlaceholder");
var optionAPlaceholder = document.querySelector("#optionBPlaceholder");
var optionAPlaceholder = document.querySelector("#optionCPlaceholder");
var optionAPlaceholder = document.querySelector("#optionDPlaceholder");
var countdownTimerEl = document.querySelector("#countdownTimer");
var timeLeft;
var currentQuestion;
var usedQuestions = [];


//initial page setup function
function initialSetup() {
    // set the main title
    mainTitleEl.textContent = "Coding Quiz"; 
    // set the description text
    questionTextEl.textContent = "This is a description of the quiz with a lot of important words to read." 
    // create a button and put it in the answer box
    var startButton = document.createElement("button");
    startButton.textContent = "Start Quiz"
    answerBoxEl.appendChild(startButton);
    startButton.addEventListener("click", function(){
        event.stopPropagation();
        startQuiz();
    })
}
//call initial page setup function
initialSetup();

//function to begin the quiz
function startQuiz() {
    //Call function to create and start countdown timer
    startTimer();
    //Call function to retrieve the first question
    getQuestion();
}

//function to create and start the countdown timer
function startTimer() {
    //set the starting time in seconds
    timeLeft = 30;
    //create a timer using setInterval to do execute this function every 1000ms
    var timeInterval = setInterval(function() {
        if(timeLeft >1) {
            countdownTimerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft ===1) {
            countdownTimerEl.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            clearInterval(timeInterval);
            countdownTimerEl.textContent = "TIME'S UP!"
        }

    }, 1000);

}

function getQuestion() {


    //choose a random question from the array, check it against the usedQuestions list

    currentQuestion = JSON.parse(localStorage.getItem("question1"));

    //set the question text
    questionTextEl.textContent = currentQuestion.questionText;

    //create 4 answer buttons
    var optionAButton = document.createElement("button");
    optionAButton.textContent = currentQuestion.optionA;
    optionAPlaceholder.appendChild(optionAButton);
    optionAButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer();
    })

    var optionBButton = document.createElement("button");
    optionBButton.textContent = currentQuestion.optionB;
    optionBPlaceholder.appendChild(optionBButton);
    optionBButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer();
    })

    var optionCButton = document.createElement("button");
    optionCButton.textContent = currentQuestion.optionC;
    optionCPlaceholder.appendChild(optionCButton);
    optionCButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer();
    })

    var optionDButton = document.createElement("button");
    optionDButton.textContent = currentQuestion.optionD;
    optionDPlaceholder.appendChild(optionDButton);
    optionDButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer();
    })

}

function checkAnswer() {


}
