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
            var feedback;
            if (currentQuestion.answer === e.target.innerText) {
                feedback = $('<p>you are right</p>');
                questionBox.append(feedback);
            }
            else {
                feedback = $('<p>you are wrong</p>');                                                       /// feedback to the question
                questionBox.append(feedback);
            }
            setTimeout(function () { feedback.empty() }, 1000)
        })

    })

}

startButton.on('click', function () {
    questionsIndex = 0;
    renderQuestion(questionsIndex);
});

