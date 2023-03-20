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
    //create a timer using setInterval to do execute this function every 1000ms
    timeInterval = setInterval(function() {
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
        timeLeft = timeLeft -5;
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
}

function endQuiz() {

    console.log("End quiz has been called");
    //stop the timer and save the time remaining as a score
    score = timeLeft;
    clearInterval(timeInterval); 
    countdownTimerEl.textContent = "Your final score is " +score;

    //Enter initials in field and click button to save it on the high scores page
    var submitForm = document.createElement("form");
    optionAPlaceholder.appendChild(submitForm);


//     <form action="/action_page.php">
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" value="John"><br><br>
//   <input type="submit" value="Submit">
// </form>


// //     var submitButton = document.createElement("button");
// //     submitButton.textContent = "Submit";
// //     optionAPlaceholder.appendChild(submitButton);
// //     submitButton.addEventListener("submit", function(){
// //         event.stopPropagation();

// })
}