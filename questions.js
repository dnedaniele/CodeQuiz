
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

HighScore = 0;

var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
var question2 = document.querySelector('#q2');
    question2.style.display = 'none';

startButton.addEventListener('click', function () {
  console.log("click works")
  setTime();
  showQuestion();
  var secondsLeft = 10;  // increase the number after testing


  function setTime() {
    var timerInterval = setInterval(timerDown, 1000);
    function timerDown() {
      secondsLeft--;
      CountDown.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        console.log('time out');
        //sendMessage(Score, show timeOut);
      }
    }
  }
  function showQuestion() {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'block';
  };
  function hideQuestion () {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
  }
    //if (question1.style.display == "none") {
    //   question1.style.display = "none" ;
    // } else {
    //   question1.style.display = "block";
    // }
   

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

