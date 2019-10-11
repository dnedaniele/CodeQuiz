
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
    
  ];

  var startButton = document.querySelector("#start");
  var HighScore = document.querySelector("#scoreNumb");
  var CountDown = document.querySelector("#countdown");

  startButton.addEventListener('click', function () {
console.log("click works")
//                make visible the first question (no hide) 
//                and start the count down
  });

  //***************  Pseudo Code **************** //
// 1. botton "start the Quiz" (event 1)
//                make visible the first question (no hide) 
//                and start the count down
// // 2. when I click on the answer (event2)
//                if the answer is right - 
                //          correct message 
                //          a. add point - 
                // else 
                //          wrong message 
                //          no point++ - 
                //          subtract time
//                after 2 secs the second question appears
// 3. time runs out and/or all questions are answered: 
        //        show final score.

