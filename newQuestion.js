var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

];

var startButton = $('#start')

var questionsIndex;

function renderQuestion(questionsIndex) {

    console.log("i am runnung")

    var currentQuestion = questions[questionsIndex]; // array[index]
    var questionBox = $('<div>');
    var questionText = $('<p>');

    questionText.text(currentQuestion.title);
    questionBox.append(questionText);
    $('#question-box').html(questionBox);

    currentQuestion.choices.forEach(function (choice) {
        var button = $('<button>');
        button.text(choice);
        console.log(button);
    })

}

startButton.on('click', function () {
    questionsIndex = 0;
    renderQuestion(questionsIndex);
});

