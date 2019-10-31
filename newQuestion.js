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
        //console.log(choice)
        var questionButton = $('<button>');
        questionButton.text(choice);
        questionBox.append(questionButton)

        questionButton.on('click', function (e) {
            console.log(currentQuestion.answer === e.target.innerText ? "you are right" : "you are wrong")  // console.log(currentQuestion.answer === e.target.innerText
            if (currentQuestion.answer === e.target.innerText) {
                questionBox.append($('<p>"you are right"</p>'));
            }
            else {
                questionBox.append($('<p>"you are wrong"</p>'));
            }
        })

    })

}

startButton.on('click', function () {
    questionsIndex = 0;
    renderQuestion(questionsIndex);
});

