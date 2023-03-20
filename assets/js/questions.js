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
    questionText: "How do you create a function in JavaScript?",
    optionA: "function:myFunction()",
    optionB: "function myFunction()",
    optionC: "function = myFunction()",
    optionD: "myFunction = var function()",
    correctAnswer: "function myFunction()"
};

var question3 = {
    questionText: "How do you call a function named myFunction?",
    optionA: "call = myFunction now",
    optionB: "call myFunction",
    optionC: "call function myFunction",
    optionD: "myFunction()",
    correctAnswer: "Stuff"
};

localStorage.setItem("question1", JSON.stringify(question1));
localStorage.setItem("question2", JSON.stringify(question2));
localStorage.setItem("question3", JSON.stringify(question3));



