    var scoreList = document.querySelector("#highScoreList");
    var goBackButton = document.querySelector("#goBack");
    var clearScoresButton = document.querySelector("#clearScores");

   //retrieve the high score array when highscores.html is loaded
   var highScores = JSON.parse(localStorage.getItem("highScoreArray"));
   var latestScore = JSON.parse(localStorage.getItem("latestScore"));

   //add latest score to high score list
   highScores.push(latestScore);
   console.log("After appending the latest score: " + highScores);

   //save the updated high score list
   localStorage.setItem("highScoreArray", JSON.stringify(highScores));

    //sort high scores array
    function compareScores (a, b) {
        if(a.scoreKey < b.scoreKey) {
            return 1;
        } else if (a.scoreKey > b.scoreKey) {
            return -1;
        }
        return 0;
    }
    highScores.sort(compareScores);

    //display high scores 
   function renderHighScores() {
        console.log("renderHighScores has been called");
        //clear all the old high scores
        scoreList.innerHTML = '';

        //populate the high score board again with the current list
        for (i=0; i<highScores.length; i++)
        {
            //create new list item
            var score = document.createElement("li");
            score.textContent = highScores[i].initialsKey + " . . . " +highScores[i].scoreKey;
            scoreList.appendChild(score);
            console.log("High score array at index "+i+" is " +highScores[i].intialsKey);
        }
   }
   renderHighScores();

   //handle the "Go Back" button and send the player to index.html
   goBackButton.addEventListener("click", function(){
    event.stopPropagation();
    window.location.href = "index.html";
})

    //handle the "Clear High Scores" button and empty the array of high scores in local storage
clearScoresButton.addEventListener("click", function(){
    event.stopPropagation();
    highScores = [];
    localStorage.setItem("highScoreArray", JSON.stringify(highScores));
    renderHighScores();
})