var mainTitleEl = document.querySelector("#mainTitle");
var questionBoxEl = document.querySelector("#questionBox");
var questionTextEl = document.querySelector("#questionText");
var answerBoxEl = document.querySelector("#answerBox");
var optionAPlaceholder = document.querySelector("#optionAPlaceholder");
var optionBPlaceholder = document.querySelector("#optionBPlaceholder");
var optionCPlaceholder = document.querySelector("#optionCPlaceholder");
var optionDPlaceholder = document.querySelector("#optionDPlaceholder");
var countdownTimerEl = document.querySelector("#countdownTimer");
var rightOrWrong = document.querySelector("#rightOrWrong");
var totalTime = 60;
var timeLeft;
var timeInterval;
var totalQuestions = 3;
var questionsLeft;
var currentQuestion;
var score;



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
        startButton.remove();
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
    timeLeft = totalTime;
    //set the starting number of questions
    questionsLeft = totalQuestions;

    countdownTimerEl.textContent = timeLeft + " seconds remaining";
    //create a timer using setInterval to do execute this function every 1000ms
    timeInterval = setInterval(function() {
        timeLeft--;
        if(timeLeft >1) {
            countdownTimerEl.textContent = timeLeft + " seconds remaining";
        } else if (timeLeft ===1) {
            countdownTimerEl.textContent = timeLeft + " second remaining";
        } else {
            clearInterval(timeInterval);
            countdownTimerEl.textContent = "TIME'S UP!"
            endQuiz();
        }

    }, 1000);

}

function getQuestion() {

    //decrement the number of questions left in the quiz
    questionsLeft--;
    
    //I *could* make this randomly select a question, but that is not in the criteria
    //Which number question are we on?
    var questionNumber = "question".concat(totalQuestions-questionsLeft);
    console.log(questionNumber);

    //pull the question from local storage
    currentQuestion = JSON.parse(localStorage.getItem(questionNumber));

    //set the question text
    questionTextEl.textContent = currentQuestion.questionText;

    //create 4 answer buttons
    var optionAButton = document.createElement("button");
    optionAButton.textContent = currentQuestion.optionA;
    optionAPlaceholder.appendChild(optionAButton);
    optionAButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer(currentQuestion.optionA, currentQuestion.correctAnswer);
    })

    var optionBButton = document.createElement("button");
    optionBButton.textContent = currentQuestion.optionB;
    optionBPlaceholder.appendChild(optionBButton);
    optionBButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer(currentQuestion.optionB, currentQuestion.correctAnswer);
    })

    var optionCButton = document.createElement("button");
    optionCButton.textContent = currentQuestion.optionC;
    optionCPlaceholder.appendChild(optionCButton);
    optionCButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer(currentQuestion.optionC, currentQuestion.correctAnswer);
    })

    var optionDButton = document.createElement("button");
    optionDButton.textContent = currentQuestion.optionD;
    optionDPlaceholder.appendChild(optionDButton);
    optionDButton.addEventListener("click", function(){
        event.stopPropagation();
        checkAnswer(currentQuestion.optionD, currentQuestion.correctAnswer);
    })

}

function checkAnswer(optionString, answerString) {
    
    if (optionString === answerString) {
        //Tell them they got the correct answer
        rightOrWrong.textContent = "Correct!";   
        console.log("Correct"); 
    } else {
        //tell them they got the wrong answer
        rightOrWrong.textContent = "Wrong!";
        timeLeft = timeLeft -10;
        console.log("Wrong");
    }

     //remove all the buttons from the previous question
     optionAPlaceholder.removeChild(optionAPlaceholder.firstChild);
     optionBPlaceholder.removeChild(optionBPlaceholder.firstChild);
     optionCPlaceholder.removeChild(optionCPlaceholder.firstChild);
     optionDPlaceholder.removeChild(optionDPlaceholder.firstChild);

     //clear the question
     questionTextEl.textContent = "";

    //If that was the last question, then end the quiz
    if (questionsLeft === 0) {
        endQuiz();
    }
    //Else, if there's another question to show, show it
    else{getQuestion();}

    //clear the rightOrWrong text
    setTimeout(function () {
        rightOrWrong.textContent = "";
    }, 1000)
}



function endQuiz() {

    // //remove all the buttons from the previous question
    // optionAPlaceholder.removeChild(optionAPlaceholder.firstChild);
    // optionBPlaceholder.removeChild(optionBPlaceholder.firstChild);
    // optionCPlaceholder.removeChild(optionCPlaceholder.firstChild);
    // optionDPlaceholder.removeChild(optionDPlaceholder.firstChild);

    // //clear the question
    // questionTextEl.textContent = "";
    
    console.log("End quiz has been called");
    //stop the timer and save the time remaining as a score
    score = timeLeft;
    clearInterval(timeInterval); 
    countdownTimerEl.textContent = "Your final score is " +score;

    questionTextEl.textContent = "All done! Enter your initials to save your score."

    var inputField = document.createElement("input");
    optionAPlaceholder.appendChild(inputField);

    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    optionBPlaceholder.appendChild(submitButton);
    submitButton.addEventListener("click", function(){
        event.stopPropagation();

        //save high score to local storage
    var initials = inputField.value;
    var latestScore = {
        initialsKey: initials,
        scoreKey: score
    }

    console.log("Score is: "+score);
    console.log("Name is: "+inputField.value);


    //retrieve the high score array, append latest, and save it to local storage
    var highScores = JSON.parse(localStorage.getItem("highScoreArray"));
    console.log(highScores)
    highScores.push(latestScore);
    localStorage.setItem("highScoreArray", JSON.stringify(highScores));

        //go to high score page
    console.log("Current URL: "+window.location.href);
    window.location.href = "highscores.html";
    })

    var highScores = JSON.parse(localStorage.getItem("highScoreArray"));
   var latestScore = JSON.parse(localStorage.getItem("latestScore"));

   console.log(highScores);
   console.log(latestScore);
}



