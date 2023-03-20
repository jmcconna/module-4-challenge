    var scoreList = document.getElementById("#highScoreList");
    var goBackButton = document.getElementById("#goBack");
    var clearScoresButton = document.getElementById("#clearScores");

   //retrieve the high score array when highscores.html is loaded
   var highScores = JSON.parse(localStorage.getItem("highScoreArray"));
   var latestScore = JSON.parse(localStorage.getItem("latestScore"));

   console.log(highScores);
   console.log(latestScore);
   //if (highScoresArray !=null)

   //add latest score to high score list
   highScores.push(latestScore);

   console.log("After appending the latest score: " + highScores);

    //sort high scores array
    function compareScores (a, b) {
        if(a.scoreKey < b.scoreKey) {
            return -1;
        } else if (a.scoreKey > b.scoreKey) {
            return 1;
        }
        return 0;
    }
    highScores.sort(compareScores);

    //display high scores 
   function renderHighScores() {
        console.log("renderHighScores has been called");
        for (i=0; i<highScores; i++)
        {
            //create new list item
            var score = document.createElement("li");
            score.textContent = highScores[i].intialsKey + " . . . " +highScores[i].scoreKey;
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
optionDButton.addEventListener("click", function(){
    event.stopPropagation();
    
})