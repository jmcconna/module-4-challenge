//This seems like something that should be done with object classes, but we haven't learned that yet
//create question objects - with answers and a correct answer
var question1 = {
    questionText: "Inside which HTML element do we put the JavaScript?",
    optionA: "<script>",
    optionB: "<body>",
    optionC: "<a>",
    optionD: "<href>",
    correctAnswer: "<script>"
};

var question2 = {
    questionText: "Where?",
    optionA: "Timbuku",
    optionB: "USA",
    optionC: "Russia",
    optionD: "China",
    correctAnswer: "USA"
};

var question3 = {
    questionText: "What?",
    optionA: "Stuff",
    optionB: "Things",
    optionC: "Nouns",
    optionD: "Proper Nouns",
    correctAnswer: "Stuff"
};

localStorage.setItem("question1", JSON.stringify(question1));
localStorage.setItem("question2", JSON.stringify(question2));
localStorage.setItem("question3", JSON.stringify(question3));



