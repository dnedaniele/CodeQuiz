
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


var startButton = document.querySelector("#start");
var HighScore = document.querySelector("#scoreNumb");
var CountDown = document.querySelector("#countdown");
HighScore = 0;
// answer buttons
//q1
var strings = document.querySelector("#answA");
var booleans = document.querySelector("#answB");
var alerts = document.querySelector("#answC");
var numbers = document.querySelector("#answD");
// q2
var quotes = document.querySelector("#answA1");
var curlyBrackets = document.querySelector("#answB1");
var parentheses = document.querySelector("#answC1");
var squareBrackets = document.querySelector("#ansD1");


// show and hide
var question1 = document.querySelector('#q1');
    question1.style.display = 'none';
var question2 = document.querySelector('#q2');
    question2.style.display = 'none';


    //Start the game
startButton.addEventListener('click', function () {

  // TIME
  var secondsLeft = 10;  // increase the number after testing
  setTime();
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
  // QUESTIONS

  //first questions
  Show();
  function Show() {
    var question1 = document.querySelector('#q1');
    question1.style.display = 'block';
  }
  answerOne()
  function answerOne() {
  document.getElementById("#answA").onclick = function () {
    console.log('right')
    HighScore++;
  }
  document.getElementById("#answB").onclick = function () {
    console.log('wrong')
    HighScore--;
  }
  document.getElementById("#answC").onclick = function () {
    console.log('wrong')
    HighScore--;
  }
  document.getElementById("#answD").onclick = function () {
    console.log('wrong')
    HighScore--;
  }
}  
console.log(HighScore);

})
  
///FUNCTIONS

// Hide and Show
function Show() {
  var question1 = document.querySelector('#q1');
  question1.style.display = 'block';
}
//   for (i = 0; i < numQuest.length; i++){

//   }
  
function hide () {
  var question1 = document.querySelector('#q1');
  question1.style.display = 'none';
}

//failed experiments

// function ShowQest1 () {
//   console.log(questions[0].title)
//   var text = document.createElement('div') //here u write new html
//   text.textContent = questions[0].title;   // I write the content for the html
//   document.body.appendChild(text);   /// I put the content inside 

// for (var i = 0; i < questions[0].choices.length; i++) {
//   var btn = document.createElement("BUTTON");
//    btn.innerHTML = questions[0].choices[i];
//     document.body.appendChild(btn);
// }
// }

// var items = document.querySelectorAll('#answB, #answC, #answD');

// for (var i = 0; i < items.length; i++)
// {
//   items[i].onclick = function() { 
//     console.log('wrong');
//   };
// } 
    
   

  

 

